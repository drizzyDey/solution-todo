export default class Element {
  constructor ({_id, _title, _description, _checked}) {
    this.id = _id;
    this.title = _title;
    this.description = _description;
    this.checked = _checked;
  }

  /* Makes <li>text</li> element tag */
  static createListItem (tasks) {
    for(let item of tasks) {
      const li = document.createElement('li');
      li.className = 'list-item';
      li.textContent = item.title;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      li.appendChild(checkbox);
      const label = document.createElement('label');
      label.textContent = item.description;
      li.appendChild(label);
      checkbox.addEventListener('click', handleStatus(item.checked));
    }
    
    return li;
  }


}