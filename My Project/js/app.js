

function getRandomMeal() {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
}

function buildRecipeCardHTML(meal) {

    const totalTime = meal.prepTime + meal.cookTime;
    const isExtended = totalTime > 45;

    const warningHTML = isExtended ? `
        <div class="extended-warning">
            <strong>Extended Preparation Time</strong>
            This recipe requires more than 45 minutes to prepare. Plan accordingly!
        </div>
    ` : '';

    const ingredientsHTML = meal.ingredients
        .map((item, i) => `<li><span class="bullet">${i + 1}</span> ${item}</li>`)
        .join('');

    const instructionsHTML = meal.instructions
        .map(step => `<li>${step}</li>`)
        .join('');

    const tipsHTML = meal.chefTips
        .map((tip, i) => `<li><span class="bullet">${i + 1}</span> ${tip}</li>`)
        .join('');

    return `
        <div class="recipe-image-col">
            <div class="recipe-emoji-wrap">
                <div class="rating-badge">
                    ⭐ ${meal.rating} <span class="review-count">(${meal.reviews} reviews)</span>
                </div>
                <div class="recipe-emoji">
                    <div class="emoji-plate"><span>${meal.emoji}</span></div>
                </div>
                <div class="image-meta-bar">
                    <div class="meta-item">
                        <i class="fa-solid fa-clock"></i>
                        <span class="meta-label">Prep Time</span>
                        <span class="meta-value">${meal.prepTime} min</span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-solid fa-fire"></i>
                        <span class="meta-label">Cook Time</span>
                        <span class="meta-value">${meal.cookTime} min</span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-solid fa-users"></i>
                        <span class="meta-label">Servings</span>
                        <span class="meta-value">${meal.servings} people</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="recipe-content-col">

            <div class="content-top">
                <div class="recipe-tags">
                    <span class="tag tag-difficulty">${meal.difficulty}</span>
                    <span class="tag tag-cuisine">${meal.cuisine}</span>
                </div>
                <div class="content-actions">
                    <button aria-label="Save"><i class="fa-solid fa-bookmark"></i></button>
                    <button aria-label="Share"><i class="fa-solid fa-share-nodes"></i></button>
                </div>
            </div>

            <h2>${meal.name}</h2>
            <p class="description">${meal.description}</p>

            ${warningHTML}

            <div class="tabs">
                <button class="tab-btn active" data-tab="ingredients"><i class="fa-solid fa-list-check"></i> Ingredients</button>
                <button class="tab-btn" data-tab="instructions"><i class="fa-solid fa-book-open"></i> Instructions</button>
                <button class="tab-btn" data-tab="nutrition"><i class="fa-solid fa-chart-pie"></i> Nutrition</button>
                <button class="tab-btn" data-tab="tips"><i class="fa-solid fa-lightbulb"></i> Chef's Tips</button>
            </div>

            <div class="tab-content">

                <div class="tab-panel active" data-panel="ingredients">
                    <ul>${ingredientsHTML}</ul>
                </div>

                <div class="tab-panel" data-panel="instructions">
                    <ol>${instructionsHTML}</ol>
                </div>

                <div class="tab-panel" data-panel="nutrition">
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.calories}</div>
                            <div class="label">Calories (kcal)</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.protein}g</div>
                            <div class="label">Protein</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.carbs}g</div>
                            <div class="label">Carbohydrates</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.fat}g</div>
                            <div class="label">Fat</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.fiber}g</div>
                            <div class="label">Fiber</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="value">${meal.nutrition.sodium}mg</div>
                            <div class="label">Sodium</div>
                        </div>
                    </div>
                </div>

                <div class="tab-panel" data-panel="tips">
                    <ul>${tipsHTML}</ul>
                </div>

            </div>

            <button class="try-another-btn" id="tryAnotherBtn"><i class="fa-solid fa-arrows-rotate"></i> Try Another Recipe</button>
        </div>
    `;
}

function renderMeal(meal) {
    const card = document.getElementById('recipeCard');
    card.innerHTML = buildRecipeCardHTML(meal);

    document.getElementById('tryAnotherBtn').addEventListener('click', () => {
        renderMeal(getRandomMeal());
    });

    const tabButtons = card.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            card.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            card.querySelector(`[data-panel="${targetTab}"]`).classList.add('active');
        });
    });
}

renderMeal(getRandomMeal());