import cr from './helpers.js';
import Model from './Model.composition.js';

function View() {

    const app = document.getElementById('app');

    const todoList = cr('ul', 'ul-todo');

    form.append(input, submit);
    app.append(form, todoList);

    return {
        show(items) {
            console.log(items);

            todoList.innerHTML = items.reduce((accumulator, item) => accumulator + `
                <li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
                    <div class="view">
                        <input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
                        <label>${escapeForHTML(item.title)}</label>
                        <button class="destroy"></button>
                    </div>
                </li>`, '');
        },
        bindAdd(handler) {
            form.addEventListener('submit', e => {
                event.preventDefault();
                if (input.value) {
                    let a = handler(input.value);
                    console.log(a);

                    form.reset();
                    this.show(handler(input.value));
                }
            });
        },
    };
}

const model = Model();

const view = View();
view.bindAdd(model.add.bind(this));