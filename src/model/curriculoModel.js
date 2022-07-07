const mysql=require("./mysqlConnect");
get = async()=>{
    return await mysql.query("SELECT c.idcurriculo, c.objetivos, c.formacao, c.idioma, c.experiencia, c.aluno_pessoa_id_pessoa, c.curso FROM curriculo c; ");
}

post= async (data)=>{
  console.log(data);
  sql="INSERT INTO curriculo"+
  " (objetivos, formacao, idioma, experiencia, aluno_pessoa_id_pessoa ,curso)"+
  " VALUES"+
  " ('"+data.objetivos+"', '"+JSON.stringify(data.formacao)+"', '"+JSON.stringify(data.idioma)+"', '"+JSON.stringify(data.experiencia)+"','"+data.idAluno+"', '"+JSON.stringify(data.curso)+"');";
 const result = await  mysql.query(sql);
  if(result){
    resp={"status":"OK", insertId:result.insertId}
  }else{
    resp={"status":"Error", "error":result}
  }   
  return resp;
}
  
put = async (data,idaluno,idcurriculo)=>{
    sql="UPDATE curriculo"+
    "  SET";
    if(data.objetivos){
      sql+=" objetivos='"+data.objetivos+"',";
    }
    if(data.formacao){
      sql+=" formacao='"+JSON.stringify(data.formacao)+"',";
    }
    if(data.idioma){
      sql+=" idioma='"+JSON.stringify(data.idioma)+"',";
    }
    if(data.experiencia){
        sql+=" experiencia='"+JSON.stringify(data.experiencia)+"',";
    }
    if(data.curso){
        sql+=" curso='"+JSON.stringify(data.curso)+"'";
    }
    sql+=" WHERE idcurriculo="+idcurriculo+";";
    console.log(sql);
    const result = await  mysql.query(sql);
    if(result){
      resp={"status":"OK", insertId:result.insertId}
    }else{
      resp={"status":"Error", "error":result}
    }   
    return resp;
  }
  
  module.exports={get,put,post}