import React from 'react';

function Profile() {
    return (
        <div className="bg-zinc-800 text-white p-8 rounded-lg">
            <div className="flex justify-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Perfil"
                    className="rounded-full h-24 w-24 object-cover"
                />
            </div>
            <div className='w-full'>
                <h2 className="text-xl font-extrabold my-4">Nome do Usuário</h2>
                <p className="my-2">
                    <span className="font-bold text-d-orange-50 px-2">Email:</span> user@example.com
                </p>
                <p className="my-2">
                    <span className="font-bold text-d-orange-50 px-2">Pais:</span>
                    Brasil
                </p>
                <p className="my-2">
                    <span className="font-bold text-d-orange-50 px-2">Ativo:</span>
                    Sim
                </p>
                <div className="mt-8 flex justify-center">
                    <button className="px-4 py-2 rounded-md bg-d-orange-50 hover:bg-d-orange-80">
                        Editar Perfil
                    </button>

                </div>
            </div>
            <div className="text-d-orange-80 font-light mt-8 flex flex-col justify-center px-20 text-center">
                <p>
                    Caso queira apagar seu perfil acesse o link abaixo que iremos acessar sua conta e entraremos em contato, para que você não tenha prejuisos, desde já agradecemos.
                </p>
                <a className="underline text-blue-400 font-thin text-sm" href="shotokawa.com/delete/solicitation">Delete sua conta</a>
            </div>

        </div>
    );
}

export default Profile;
