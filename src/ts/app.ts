//^ autobind decorator

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // const methodName = context.name;
  // if (context.private) {
  //   throw new Error(
  //     `'autobind' cannot decorate private properties like ${
  //       methodName as string
  //     }`
  //   );
  // }
  // context.addInitializer(function () {
  //   this[methodName] = this[methodName].bind(this);
  // });
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

//^ ProjectInput Class

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
    this.configure();
  }
  #attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  @autobind //^ i decoratori non funzionano con campi privati(# di js)
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }
}

const prjInput = new ProjectInput();
