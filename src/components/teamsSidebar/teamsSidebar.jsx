import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import teamService from "../../services/teamService/teamService.jsx";


class TeamsSidebar extends Component {
    state = {
        "teams": []
    }
    async componentDidMount() {

        let { data: teams } = await teamService.getTeams();
        this.setState({ teams });
    }
    render() {
        let { teams } = this.state;
        return (teams.map(team => {
            let { name: team_name } = team;
            let teamName = '/' + (team_name.replace(/\s+/g, '-').toLowerCase());
            return (
                <li className="nav-item" key={team.id}>
                    <Link className="nav-link" to={teamName + '/' + team.id}>
                        {team.name}
                    </Link>
                </li>
            )
        })
        );
    }
}

export default TeamsSidebar;