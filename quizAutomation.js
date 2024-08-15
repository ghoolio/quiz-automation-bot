async function runQuiz(page) {
  // Example quiz automation
  await page.click('#start-quiz');
  
  const questions = await page.$$('.question');
  for (const question of questions) {
    const type = await question.evaluate(el => el.dataset.type);
    switch (type) {
      case 'multiple-choice':
        await handleMultipleChoice(question);
        break;
      case 'text-input':
        await handleTextInput(question);
        break;
      case 'drag-drop':
        await handleDragAndDrop(question);
        break;
    }
    await page.click('#next-question');
  }
  
  await page.click('#submit-quiz');
  console.log('Quiz completed');
}

async function handleMultipleChoice(question) {
  const options = await question.$$('.option');
  await options[Math.floor(Math.random() * options.length)].click();
}

async function handleTextInput(question) {
  const input = await question.$('input[type="text"]');
  await input.type('Example Answer');
}

async function handleDragAndDrop(question) {
  const draggables = await question.$$('.draggable');
  const dropZones = await question.$$('.drop-zone');
  for (let i = 0; i < draggables.length; i++) {
    await draggables[i].dragAndDrop(dropZones[i]);
  }
}

module.exports = { runQuiz };
