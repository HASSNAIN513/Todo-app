import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [finish, setfinish] = useState(false)




  useEffect(() => {
    let set = localStorage.getItem("todos")
    set = set ? JSON.parse(set) : []
    settodos(set)
  }, [])


  const handlechange = (e) => {
    let a = e.target.value

    settodo(a)



  }
  const handleadd = (e) => {
    settodos([...todos, { id: uuidv4(), todo, iscompleted: false }])

    settodo("")
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const handlefinish = (e) => {
    setfinish(!finish)





  }
  const handlecheck = (e) => {


    let id = e.target.name

    let index = todos.findIndex((todo) => {
      return todo.id === id
    })

    let newtodos = [...todos]
    newtodos[index].iscompleted = !newtodos[index].iscompleted
    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(todos))




  }
  const handeldelete = (e) => {



    let id = e.id



    let newtodos = todos.filter((todo) => {
      return todo.id !== id
    })

   

    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const handeledit = (e) => {

    settodo(e.todo)

    let id = e.id


    let newtodos = todos.filter((todo) => {
      return todo.id === !id
    })


    settodos(newtodos)
    localStorage.setItem("todos", JSON.stringify(todos))


  }


  return (
    <>
      <Navbar />
      <div className="md:container my-3 rounded-lg w-full  md:w-3/4 lg:2/4 p-4 md:mx-auto py-3 bg-violet-200 md:min-h-[80vh] min-h-screen ">
        <div className="addtodo my-4 ">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className='flex my-4  gap-3'>
            <input type="text" onChange={handlechange} value={todo} className='bg-white rounded-full w-full p-2 py-1' />
            <button onClick={handleadd} disabled={todo.length < 3 ? true : false} className='disabled:bg-violet-400+ bg-violet-800 text-white p-3 py-1 font-semibold cursor-pointer rounded-full'>Save</button>
          </div>

        </div>
        <input type="checkbox" name="finish" onChange={handlefinish} checked={finish} id="" />
        <label className='font-semibold m-3' htmlFor="finish">Finished</label>


        <hr className='my-4 w-3/4 opacity-40 mx-auto' />
        <h2 className='text-xl font-bold'>Your Todos</h2>

        {(todos.length == 0 && <div className='my-4 text-xl font-light'> No todos to show </div>)}

        {todos.map(item => {


          return (finish == true || !item.iscompleted) && ((<div key={item.id} className="yourtodo my-5  flex gap-4  justify-between">

            <div className='flex gap-3 h-auto items-center'>
              <input type="checkbox" name={item.id} checked={item.iscompleted} onChange={handlecheck} id="" />
              <div className={`${item.iscompleted ? "line-through" : ""} break-all`}>
                {item.todo}
              </div>

            </div>

            <div className="buttons h-full  flex  gap-2">
              <button onClick={() => handeledit(item)} className=' bg-violet-800 text-white p-3 py-1 font-semibold cursor-pointer rounded-full'>Edit</button>
              <button onClick={() => handeldelete(item)} className=' bg-violet-800 text-white p-3 py-1 font-semibold cursor-pointer rounded-full'>Delete</button>
            </div>

          </div>
          )
          )
        })}


      </div>
    </>
  )
}

export default App
