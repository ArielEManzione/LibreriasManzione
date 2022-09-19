
let partidosC_ls = JSON.parse(localStorage.getItem("partidosC"));
let tablaGrupoC_ls = JSON.parse(localStorage.getItem("grupoC"));
let resultadosC_ls = JSON.parse(localStorage.getItem("resultadosCCargados"));

function cargarDatos(datos){
    return datos.usuarId == idUsuario;
}

function cargarPartidosUsuario(){
    
    if (partidosC_ls != null){
        let partidosCusuario = partidosC_ls.find(cargarDatos);
        if (partidosCusuario === undefined){
            return null;
        }else{
            return partidosCusuario.partidosC;
        }
    }else{
        return null;
    }
    
}

function cargarResultadosCCargadosUsuario(){

    if (resultadosC_ls != null){
        let resiltadosCusuario = resultadosC_ls.find(cargarDatos);
        if (resiltadosCusuario === undefined){
            return null;
        }else{
            return resiltadosCusuario.resultadosCCargados;
        }
    }else{
        return null;
    }
}

function cargarTablaGrupoCUsuario(){
    
    if (tablaGrupoC_ls != null){
        let tablaGrupoCusuario = tablaGrupoC_ls.find(cargarDatos);
        if (tablaGrupoCusuario === undefined){
            return null;
        }else{
            return tablaGrupoCusuario.tablaGrupoC;
        }
    }else{
        return null;
    }
}


function cargardelLS(){
    partidosC_ls = JSON.parse(localStorage.getItem("partidosC"));
    tablaGrupoC_ls = JSON.parse(localStorage.getItem("grupoC"));
    resultadosC_ls = JSON.parse(localStorage.getItem("resultadosCCargados"));
}