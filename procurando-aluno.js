const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunoMedia = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaAlunoMedia[0].includes(aluno)) {
    // const alunos = listaAlunoMedia[0];
    // const medias = listaAlunoMedia[1];

    const [alunos, medias] = listaAlunoMedia;
    const indece = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indece];

    console.log(`${aluno} tem média ${mediaDoAluno}`);
  } else {
    console.log("Aluno não localizado");
  }
}

exibeNomeENota("Caio");
