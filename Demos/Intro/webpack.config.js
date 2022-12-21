const path = require('path');                               // librairie Node native
const HtmlWepackPlugin = require('html-webpack-plugin');    // ''

module.exports = {
    entry : {                                               // Point d'entrée
        main : path.join(__dirname, "src/index.js")         // Définition du nom de notre entrée et où il se trouve.
    },
    output : {                                              // Point de sortie
        path : path.join(__dirname, "dist"),                // fichier de sortie sera dans dist
        filename: "[name].bundle.js"
    },
    module : {
        rules : [                                           // Applications des loaders
            {
                test: /\.js/,                               // Regex qui prend tous les fichiers .js
                exclude: /(node_modules)/,                  // Précision de ne pas utiliser ce qui se trouve dans node_module
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWepackPlugin({                              // Récupère index.html et injecter bundle créé à partir de js.
            template: path.join(__dirname, "./src/index.html")
        })
    ],
    stats: "minimal",
    devtool: "source-map",
    mode: "development",
    devServer: {                                            // Configuration de Webpack Dev Server
        open: false,                                        // N'ouvre pas le navaigateur s'il n'est pas déjà ouvert.
        static: path.resolve(__dirname, "./dist"),          // Dans quel folder se trouve l'application
        port: 4000                                          // localhost:4000
    }
}