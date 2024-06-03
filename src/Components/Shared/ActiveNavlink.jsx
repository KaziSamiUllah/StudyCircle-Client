import { NavLink } from 'react-router-dom'

const ActiveNavlink = ({ label, address }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        ` flex items-center  py-2 px-5  transition-colors duration-300 transform  hover:bg-primary    ${
          isActive ? 'bg-secondary text-white' : 'text-gray-600 '
        }`
      }
    >
      {/* <Icon className='w-5 h-5' /> */}

      <span className='font-medium'>{label}</span>
    </NavLink>
  )
}

export default ActiveNavlink