import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value, event.currentTarget.name);

    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const fish = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select name="status" onChange={this.handleChange} value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={fish.desc} />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={fish.image}
        />

        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
