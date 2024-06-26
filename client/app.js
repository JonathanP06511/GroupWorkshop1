document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemsList = document.getElementById('itemsList');
  

    fetch('/api/items')
      .then(response => response.json())
      .then(items => {
        items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.id}: ${item.name}`;
          itemsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error al obtener los items:', error));
  

    itemForm.addEventListener('submit', event => {
      event.preventDefault();
      const itemName = document.getElementById('itemName').value;
  
      fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName }),
      })
        .then(response => response.json())
        .then(newItem => {
          const li = document.createElement('li');
          li.textContent = `${newItem.id}: ${newItem.name}`;
          itemsList.appendChild(li);
          itemForm.reset();
        })
        .catch(error => console.error('Error al crear el item:', error));
    });
  });
  