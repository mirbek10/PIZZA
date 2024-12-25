
import { IoMdArrowDropup } from "react-icons/io";

const buttons = [
  {
    id: '1',
    name: "Все"
  },
  {
    id: '2',
    name: "Мясные"
  },
]


const FilterButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {buttons.map(btn => <button key={btn.id}> {btn.name}</button>)}
      </div>

      <div>
        <p> <IoMdArrowDropup /> Сортировка по:  <span></span> </p>
      </div>
    </div>
  )
}

export default FilterButton