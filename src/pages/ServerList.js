import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {graphql, QueryRenderer} from 'react-relay';
import environment from "../enviroment";


const useStyles = makeStyles({
    table: {
        margin: "auto",
        marginTop: 100,
        width: "50%",
    },
});

function ServerList(props) {
    const { world } = props;
    const classes = useStyles();

    return (
    <QueryRenderer
        environment={environment}
        query={graphql`
          query ServerListQuery($world: ID!) {
            towns(world: $world) {
              name
            }
          }
        `}
        variables={{world: world.id}}
        render={({error, props}) => {
            if (error) { //TODO fix loading and error display
                return <div>Error!</div>;
            }
            if (!props) {
                return <div>Loading...</div>;
            }

            return (
                <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell align="right">Members</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">At war?</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.towns.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            );
        }}/>
    );
}

export default ServerList;

