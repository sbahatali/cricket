import React, { Component } from 'react'
import playerService from '../../../services/playerService/playerService.jsx';
class India extends Component {
    state = {
        players: []
    }
    async componentDidMount() {
        let team = this.props.match.params.id;
        let { data: players } = await playerService.getAllPlayers();
        players = players.filter(player => player.team === team);
        this.setState({ players });
    }

    onDelete = async (playerId) => {
        let { players } = this.state;
        await playerService.deletePlayer(playerId);
        players = players.filter(player => player.id !== playerId);
        this.setState({ players });
    }

    onEdit = async (playerId) => {
        console.log(playerId)
    }

    render() {
        let players = this.state.players;
        return (
            <React.Fragment>
                <h1>India Team</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Playing Role</th>
                            <th scope="col">Batting Style</th>
                            <th scope="col">Bowling Style</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player =>
                            <tr key={player.id}>
                                <td >{player.name}</td>
                                <td>{player.playingRole}</td>
                                <td>{player.battingStyle}</td>
                                <td>{player.bowlingStyle}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm m-2" onClick={() => this.onDelete(player.id)}>Delete</button>
                                    <button className="btn btn-primary btn-sm" onClick={() => this.onEdit(player.id)}>Edit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default India;