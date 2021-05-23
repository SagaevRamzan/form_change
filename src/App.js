import React, { useState } from 'react';

function App(props) {
  const [students, setStudents] = useState([
    {
      surname: 'Юсупов',
      firstname: 'Мохмад',
      fathername: 'Вахаевич',
      paid: true
    },
    {
      surname: 'Катаев',
      firstname: 'Хамзат',
      fathername: 'Хаважевич',
      paid: false
    },
  ]);

  const [fullname, setFullname] = useState("");

  const handleChange = (e) => {

    setFullname(e.target.value);
  }

  function handleDeletItem(item){
    const newArr=students.filter((student,index)=>{
      if(index===item){
        return false
      }
      return  true
    })
    setStudents(newArr)
  }
  const [chekvalu,setChekvalu]=useState(true)
  function handlecheckChenge(chek){

    setChekvalu(!chekvalu)
  }
  const handleInsert = () => {
    const fio = fullname.split(' ');
  if(chekvalu===true){
    setStudents([...students, {
      surname: fio[0],
      firstname: fio[1],
      fathername: fio[2],
      paid: true
    }])}
  else {
  setStudents([...students, {
    surname: fio[0],
    firstname: fio[1],
    fathername: fio[2],
    paid: false
  }])

}
  if(fullname){
    setFullname("")
    }
  else{
    alert("Введите данные, поле пустое!")

  }


  }

  return (
      <div className="container w-50 mt-2">
        <div className="d-flex justify-content-between mb-2">
          <div>
            <input
                type="text"
                className="form-control"
                value={fullname}
                onChange={handleChange}
            />
          </div>
          <div>
            <input type="checkbox" className="form-check-input" checked={chekvalu} onChange={handlecheckChenge}/>
          </div>
          <div>
            <button className="btn btn-success" onClick={handleInsert}>
              добавить
            </button>
          </div>
        </div>
        <ul className="list-group">
          {students.map((student,item) => {
            return(
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    {student.surname}
                    {' '}
                    {student.firstname[0]}.
                    {' '}
                    {student.fathername[0]}.
                  </div>
                  <div>
                    {student.paid ? 'оплатил' : 'не оплатил'}
                  </div>
                  <div>
                    <button className="btn btn-outline-danger" onClick={()=>handleDeletItem(item)}>
                      ❌
                    </button>
                  </div>
                </li>
            );
          })}
        </ul>
      </div>
  );
}

export default App;