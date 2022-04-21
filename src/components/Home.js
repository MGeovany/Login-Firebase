
import {useAuth} from '../context/authContext'


export  function  Home(){

  const {user, logout, loading} = useAuth();

  console.log(user);

  const handleLogout = async() => {
    await logout();



  }; 

  if (loading){
    return <h1>loading</h1>
  }
  
  return (
    <>
      <div>Home</div>
      <h1>Bienvenido {user.displayName || user.email}</h1>
      <button
       className='LogOut' 
       onClick={handleLogout}>
        Cerrar Sesion
      </button>
    </>
    
  )
}
