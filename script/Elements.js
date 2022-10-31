import Element from './Element';

export default class Elements {
  constructor (_project) {
    this.project = _project;
  }

  /* Makes <ul>text</ul> element tag */
  static createList (tasks) {
    const ul = document.createElement('ul');
    ul.className = 'task-list';
    return ul;
  }

  update() {

    /* Fill <ul>/<ol> tag with <li> */
    for(const tasks of this.project) {
      const element = new Element(tasks);
      ul.appendChild(element)
    }

  }

}