import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function ListaFuncionarios() {

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    // Recupera os funcionários do localStorage quando o componente é montado
    const funcionariosSalvos = JSON.parse(localStorage.getItem("Funcionarios")) || [];

    setFuncionarios(funcionariosSalvos);

  }, []);

  const handleDelete = (cpf) => {

    // Filtra os funcionários, removendo aquele cujo CPF corresponde ao CPF fornecido
    const novosFuncionarios = funcionarios.filter((func) => func.cpf !== cpf);

    // Atualiza o localStorage com o novo array
    localStorage.setItem("Funcionarios", JSON.stringify(novosFuncionarios));

    // Atualiza o estado
    setFuncionarios(novosFuncionarios);
    
  };

  return (
    
    <main className="flex items-center justify-center flex-col">
      
      <table className='m-8 rounded-[5px] overflow-hidden hover:scale-110'>
        <thead className=' rounded-full'>
          <tr>
            <th className=' bg-black border border-black px-4 text-white py-2'>Nome</th>
            <th className='bg-black border border-black px-4 text-white py-2'>CPF</th>
            <th className='bg-black border border-black px-4 text-white py-2'>Salário</th>
            <th className='bg-black border border-black px-4 text-white py-2'>Endereço</th>
            <th className='bg-black border border-black px-4 text-white py-2'>Telefone</th>
            <th className='bg-black border border-black px-4 text-white py-2'>Horas Trabalhadas</th>
            <th className='bg-black border border-black px-4 text-white py-2'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((info, index) => (
            <tr key={index}>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.nome}</td>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.cpf}</td>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.salario}</td>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.endereco}</td>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.telefone}</td>
              <td className='border border-black px-4 py-2 text-white bg-slate-800'>{info.horasTrabalhadas}</td>
              <td className='border border-black px-4 py-2 gap-[2vh]  bg-slate-800'>
                <button className=" mb-1 flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-[6vh] px-4 py-2 max-w-[15vw] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2" onClick={() => setAttribute(info)}>Editar</button>
                <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-[6vh] px-4 py-2 max-w-[15vw] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2" onClick={() => handleDelete(info.cpf)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to="/"
        className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-[6vh] px-4 py-2 max-w-[15vw] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
      >
        Página inicial
      </Link>
    </main>
    
  );
}

export default ListaFuncionarios; 