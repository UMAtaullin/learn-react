import React  from 'react';
import ava from '../static/img/user.jpeg';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Pagination from './Pagination';

const Users = (props) => {

  return (
    <div className={style.users}>

      <UsersSearchForm/>

      <Pagination 
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChange={props.onPageChange}
        totalCount={props.totalCount}/>

      {props.users.map((el) => (
        <div key={el.id}>
          <div className={style.row}>
            <div className={style.column}>
              <NavLink to={'/profile/' + el.id} className={style.ava}>
                <img
                  className={style.image}
                  src={el.photos.small != null ? el.photos.small : ava}
                  alt=""
                />
              </NavLink>
              <div className={style.btn}>
                {el.followed ? (<button
                    disabled={props.disabledButton.some(id => id === el.id)}
                    onClick={() => {props.unfollow(el.id)}}
                  >Unfollow</button>
                  ) : (<button
                    disabled={props.disabledButton.some(id => id === el.id)}
                    onClick={() => {props.follow(el.id)}}
                  >Follow</button>
                )}
              </div>
            </div>
            <div className={style.info}>
              <div>
                <p>{el.name}</p>
                <p>{el.status}</p>
              </div>
              <div>
                <p>{'el.location.country'}</p>
                <p>{'el.location.city'}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const UsersSearchForm = () => {

  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  } 

  return (
    <div className={style.formik}>
      <Formik initialValues={{ term: '' }} onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />

            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
  }

 
export default Users
