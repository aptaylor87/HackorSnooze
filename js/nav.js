"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $navLogin.hide();
  $navLogOut.show();
  $mainNavLinks.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show the new story form when the submit button is clicked in the navigation event is triggered */
function submitLinkClick(evt) {
  console.debug("submitLinkClick");
  hidePageComponents();
  $newStoryForm.show();
  $allStoriesList.show();
}


$submitLink.on("click", submitLinkClick);

// show favorites list on favorites click

function favoritesLinkClick(evt) {
  console.debug("favoritesLinkClick");
  hidePageComponents();
  putFavoritesListOnPage();
  $favoritedStories.show();
}

$favoriteLink.on("click", favoritesLinkClick);

// Show my stories with option to delete

function myStoriesLinkClick(evt) {
  console.debug("myStoriesLinkClick");
  hidePageComponents();
  putMyStoriesonPage();
  $myStories.show();
}

$myStoriesLink.on("click", myStoriesLinkClick);
