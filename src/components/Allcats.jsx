import { Link } from 'react-router-dom'


function Allcats({ temp1, catID }) {
    return (
        <Link to={`/category/${temp1.id}`} className={`dropdown-item ${(catID == temp1.id) ? "active" : ''}`}>{temp1.title}</Link>
    )
}

export default Allcats