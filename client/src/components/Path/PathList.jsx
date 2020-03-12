// import React, { Fragment, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import TaskDetails from './TaskDetails';
// import Path from './Path';

// import { getAllPaths } from '../../actions/pathAction';
// import Spinner from '../layout/Spinner';

// const PathList = ({ getAllPaths}, {paths}) => {
//     const [data, setData] = useState({ paths: [] });
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getAllPaths();
//         setData(paths.data);
//         setLoading(false);
//     }, []);

//     console.log(paths.data);

//     return loading && paths === null ? (
//         <Spinner />
//     ) : (
//         <Fragment>
//    <ul>
//       {data.paths.map(item => (
//         <li key={item._id}>
//           <a >{item.name}</a>
//         </li>
//       ))}
//     </ul>
//      </Fragment>
//     )
//     //   <Fragment>
//     //     {loading ? (
//     //       <Spinner />
//     //     ) : (
//     //       <Fragment>
//     //         <div className='profiles'>
//     //           {paths.length > 0 ? (pathsData.map(item => <div>{item}</div>))
//     //            : (
//     //             <h4>No profiles found...</h4>
//     //           )}
//     //         </div>
//     //       </Fragment>
//     //     )}
//     //   </Fragment>
// };

// PathList.propTypes = {
//     getAllPaths: PropTypes.func.isRequired,
//     path: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//     path: state.path,
// });

// export default connect(mapStateToProps, { getAllPaths })(PathList);
