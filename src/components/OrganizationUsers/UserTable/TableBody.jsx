import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import TableDropdown from '@Components/Organizations/OrganizationsTableDropdown/index';
import { Creators } from '@Actions/users';

const { openUserPopup, getSelectedId, getIndividualUserDataRequest } = Creators;

const TableBody = ({ label, options, handleClick, collapsed }) => {
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.users.openPopup);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(collapsed);
  }, [collapsed]);

  const handleToggle = () => {
    setCollapse((prevState) => !prevState);
    handleClick();
  };
  const handleDelete = (id, name) => {
    dispatch(getSelectedId(id));
    dispatch(openUserPopup({ popup: true, type: 'delete' }));
  };
  const handleEdit = (id) => {
    dispatch(openUserPopup({ popup: true, type: 'edit' }));
    dispatch(getIndividualUserDataRequest(id));
  };
  return (
    <>
      <tr className={collapse ? 'theader theader_active' : 'theader'} onClick={handleToggle}>
        <td colSpan="3">
          <p className="fw-bold pl-30">{label}</p>
        </td>
      </tr>
      {collapse &&
        options?.map((elem) => (
          <tr className="tbody">
            <td className="pl-30">
              <div className="is-flex is-start is-align-center is-wrap">
                <figure className="is-circle is-circle_xs is-circle_img mr-10">
                  <img src={elem?.image_thumbnail} alt="" />
                </figure>
                <div className="content flex-1">{elem?.full_name}</div>
              </div>
            </td>
            <td>{elem?.role}</td>
            <TableDropdown editData deleteData handleDelete={handleDelete} handleEdit={handleEdit} data={elem} />
          </tr>
        ))}
    </>
  );
};

TableBody.defaultProps = {
  collapsed: false,
};

TableBody.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
};

export default TableBody;
