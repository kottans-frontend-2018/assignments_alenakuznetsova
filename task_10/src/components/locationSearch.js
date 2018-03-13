class LocationSearch {
  constructor() {
    this.state = {
      isValid: true,
    };

    this.host = document.createElement('div');
    this.host.classList.add('input-search center');

    this.host.addEventListener('submit', this.handleSubmit);
  }

  updateState(nextState) {
    this.state = nextState;
    this.render();
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const city = ev.target.elements.search.value.trim();

    if (!city.length) {
      this.updateState({ isValid: false });
    }
  }

  render() {
    const { isValid } = this.state;

    this.host.innerHTML = 
      '<input id="input_search" type="search" name="search" placeholder="Search city">';

    return this.host;
  }
}

export default LocationSearch;