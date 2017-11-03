angular.module("MyFirsApp", [])
    .controller("FirstController", ["$scope",function (m) {
        m.nombre = "Ricardo";
        m.nuevoComentario = {};
        m.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "ricardoperez"
        },
            {
                comentario: "Mal tutorial",
                username: "javierfreites"
        }
        ];
        m.agregarComentario = function(){
            m.comentarios.push(m.nuevoComentario);
            m.nuevoComentario = {};
        }
    },]);
