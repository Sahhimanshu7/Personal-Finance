import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Profile() {
  const navigate = useNavigate();

  return(
    <Link to="/">
      Home
    </Link>
  )
}