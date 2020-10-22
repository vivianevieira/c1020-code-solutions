var $taskContainer = document.querySelector('.task-list');

$taskContainer.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var taskItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', taskItem);
    taskItem.remove();
  }
});
