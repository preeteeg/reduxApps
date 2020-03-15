import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getUsers } from '../store/actions'


function Users({loading,users,getUsers}) {
useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Crazy Users</h2>
      <ul className="products">
        {users.map(item => {
          return (
            <li key={item.id} className="product">
             <img alt="monster"  src={`https://robohash.org/${item.id}?set=set2/size=130x130`} />
              <h4>{item.name}</h4>
            </li>
          );
        })}
      </ul>
      </section>
  )
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    getUsers:PropTypes.func.isRequired,
    
}

const mapStateToProps = ({ usersState:{ loading, users }})=> {
    return{
        loading,
        users
    }
}
const mapDispatchToProps = (dispatch) => ({getUsers : ()=>dispatch(getUsers()) })

export default connect(mapStateToProps,mapDispatchToProps)(Users)

