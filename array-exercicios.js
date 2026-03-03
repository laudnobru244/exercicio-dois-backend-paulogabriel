const alunos = [
    { nome: "Ana", nota: 8.5, idade: 16, turma: "3A" },
    { nome: "João", nota: 6.0, idade: 17, turma: "3B" },
    { nome: "Maria", nota: 9.0, idade: 16, turma: "3A" },
    { nome: "Pedro", nota: 4.5, idade: 17, turma: "3B" },
    { nome: "Julia", nota: 7.5, idade: 16, turma: "3A" },
    { nome: "Carlos", nota: 5.5, idade: 17, turma: "3B" }
  ];
  
  
  // 1️⃣ Filtrar alunos aprovados (nota >= 6)
  const aprovados = alunos.filter(aluno => aluno.nota >= 6);
  console.log("Alunos aprovados:");
  console.log(aprovados);
  
  
  // 2️⃣ Extrair nomes dos alunos
  const nomes = alunos.map(aluno => aluno.nome);
  console.log("\nNomes dos alunos:");
  console.log(nomes);
  
  
  // 3️⃣ Criar boletim formatado
  const boletim = alunos.map(aluno => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
    return `${aluno.nome} - Nota: ${aluno.nota} - Status: ${status}`;
  });
  
  console.log("\nBoletim:");
  boletim.forEach(item => console.log(item));
  
  
  // 4️⃣ Calcular média da turma
  const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
  const media = somaNotas / alunos.length;
  
  console.log("\nMédia da turma:");
  console.log(media.toFixed(2));
  
  
  // 5️⃣ Agrupar alunos por turma
  const agrupadosPorTurma = alunos.reduce((acc, aluno) => {
    if (!acc[aluno.turma]) {
      acc[aluno.turma] = [];
    }
    acc[aluno.turma].push(aluno.nome);
    return acc;
  }, {});
  
  console.log("\nAlunos agrupados por turma:");
  console.log(agrupadosPorTurma);
  
  
  // 6️⃣ Melhores alunos da 3A (nota >= 8)
  const melhores3A = alunos
    .filter(aluno => aluno.turma === "3A" && aluno.nota >= 8)
    .map(aluno => aluno.nome);
  
  console.log("\nMelhores alunos da 3A:");
  console.log(melhores3A);
  