import React from 'react';
// import PropTypes from 'prop-types';
// import { type RouterProps } from 'react-router'
import { AnimatedView } from '../../components';

function Users() {
    return (
        <AnimatedView>
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel">
                            <header className="panel-heading">Responsive Hover Table</header>
                            <div className="panel-body table-responsive">
                                <div className="box-tools m-b-15">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="table_search"
                                            className="form-control input-sm pull-right"
                                            style={{ width: '150px' }}
                                            placeholder="Search"
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-default">
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Date of Joining</th>
                                            <th>Subscription Expiry Date</th>
                                            <th>Invoices</th>
                                            <th>Estimates</th>
                                            <th>Payments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>183</td>
                                            <td>John Doe</td>
                                            <td>user@example.org</td>
                                            <td>11-7-2014</td>
                                            <td>11-7-2014</td>
                                            <td>
                                                234
                                                {/* <span className="label label-success">Approved</span> */}
                                            </td>
                                            <td>192</td>
                                            <td>$ 2,345</td>
                                        </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>John Doe</td>
                                            <td>user@example.org</td>
                                            <td>11-7-2014</td>
                                            <td>11-7-2014</td>
                                            <td>
                                                234
                                                {/* <span className="label label-success">Approved</span> */}
                                            </td>
                                            <td>192</td>
                                            <td>$ 2,345</td>
                                        </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>John Doe</td>
                                            <td>user@example.org</td>
                                            <td>11-7-2014</td>
                                            <td>11-7-2014</td>
                                            <td>
                                                234
                                                {/* <span className="label label-success">Approved</span> */}
                                            </td>
                                            <td>192</td>
                                            <td>$ 2,345</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedView>
    );
}

export default Users;
