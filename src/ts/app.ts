class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    //============
    // const clone = this.templateElement.content.cloneNode(true) as HTMLElement;
    // this.element = clone.querySelector('form') as HTMLFormElement;

    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.#attach();
    this.#configure();
  }
  #attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  #submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputElement.value);
  }

  #configure() {
    this.element.addEventListener('submit', this.#submitHandler.bind(this));
  }
}

const prjInput = new ProjectInput();
