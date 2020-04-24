import React, { Component } from 'react';
import Joi from 'joi-browser';
import teamService from '../../services/teamService/teamService.jsx';
import playerService from '../../services/playerService/playerService.jsx';
import logo from "../../assets/images/logo.png";
import "./player.css";
class Player extends Component {
    state = {
        player: { name: '', dob: '', playingRole: '', battingStyle: '', bowlingStyle: '', team: '' },
        errors: {},
        teams: []
    }

    schema = {
        name: Joi.string().required().label('Name'),
        dob: Joi.string().required().label('Date of Birth'),
        playingRole: Joi.string().required().label('Playing Role'),
        battingStyle: Joi.string().required().label('Batting Style'),
        bowlingStyle: Joi.string().required().label('Bowling Style'),
        team: Joi.string().required().label('Team')
    }

    async componentDidMount() {
        let { data: teams } = await teamService.getTeams();
        this.setState({ teams })
        if (this.props.match.params.id !== undefined) {
            this.getPlayer();
        }
    }

    getPlayer = async () => {
        let playerId = this.props.match.params.id;
        let { data: player } = await playerService.getPlayer(playerId);
        this.setState({ player })
    }

    validate = () => {
        let options = { abortEarly: false };
        let { error } = Joi.validate(this.state.player, this.schema, options);
        if (!error) return null;
        let errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({ name, value }) => {
        let obj = { [name]: value };
        let schema = { [name]: this.schema[name] };
        let { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.props.match.params.id !== undefined) {
            await playerService.updatePlayer(this.state.player);
            window.location = '/';
        } else {
            let errors = this.validate();
            this.setState({ errors: errors || {} });
            let { player } = this.state;
            if (errors)
                return;
            //call the server 
            try {
                let { data: player } = await playerService.addPlayer(this.state.player);
                window.location = '/';
            } catch (ex) {
                console.log('exception', ex)
            }
        }
    }


    handleChange = ({ currentTarget: input }) => {
        let player = { ...this.state.player };
        let errors = { ...this.state.errors };
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        player[input.name] = input.value;
        this.setState({ player, errors });
    }



    render() {
        let { player } = this.state;
        let { errors } = this.state;
        let { teams } = this.state;

        return (
            <React.Fragment>
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h2 className="h3 mb-3 font-weight-normal">www.cricket.com</h2><br />
                        <h1 className="h3 mb-3 font-weight-normal">Please add a player</h1>

                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" value={player.name} onChange={this.handleChange} id="name" className="form-control" placeholder="name" />
                        {errors.name && <div className="alert alert-danger">{errors.name}</div>}

                        <label htmlFor="dob" className="sr-only">Date of Birth</label>
                        <input type="text" name="dob" value={player.dob} onChange={this.handleChange} id="dob" className="form-control" placeholder="dob" />
                        {errors.dob && <div className="alert alert-danger">{errors.dob}</div>}

                        <label htmlFor="playingRole" className="sr-only">Playing Role</label>
                        <input type="text" name="playingRole" value={player.playingRole} onChange={this.handleChange} id="playingRole" className="form-control" placeholder="Playing Role" />
                        {errors.playingRole && <div className="alert alert-danger">{errors.playingRole}</div>}

                        <label htmlFor="battingStyle" className="sr-only">Batting Style</label>
                        <input type="text" name="battingStyle" value={player.battingStyle} onChange={this.handleChange} id="battingStyle" className="form-control" placeholder="Batting Style" />
                        {errors.battingStyle && <div className="alert alert-danger">{errors.battingStyle}</div>}

                        <label htmlFor="bowlingStyle" className="sr-only">Bowling Style</label>
                        <input type="text" name="bowlingStyle" value={player.bowlingStyle} onChange={this.handleChange} id="bowlingStyle" className="form-control" placeholder="Bowling Style" />
                        {errors.bowlingStyle && <div className="alert alert-danger">{errors.bowlingStyle}</div>}

                        <label htmlFor="team" className="sr-only">Team</label>
                        <select name="team" onChange={this.handleChange} id="team" className="form-control">
                            <option value="">Select Team</option>
                            {teams.map(team => (<option value={team.id} key={team.id}>{team.name}</option>))}
                        </select>
                        {errors.team && <div className="alert alert-danger">{errors.team}</div>}

                        {this.props.match.params.id ? <button className="btn btn-lg btn-primary btn-block" type="submit">Update Player</button> : <button disabled={this.validate()} className="btn btn-lg btn-primary btn-block" type="submit">Add Player</button>}
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Player;