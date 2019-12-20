import React from "react";

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split("/");
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  }
};

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }

    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" type="text" data-parse="uppercase" />

        <input name="email" type="email" />

        <input name="birthdate" type="text" data-parse="date" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default MyForm;
