# Contributing to Umbrel

## PR review

A great way to contribute to Umbrel is to participate in PR review. Anyone is welcome to checkout a PR branch, test it, and leave their feedback.

It's important to pull down the code and test the changes before leaving a review.

PR review is the bottleneck of Umbrel development so help with PR review is greatly appreciated.

## Finding something to work on

A good place to look is our [high priority issues](https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Agetumbrel+label%3A%22high+priority%22+label%3A%22help+wanted%22+).

Reviewing code can be quite time consuming. If you choose to work on something low priority it may be a while until we'll be able to dedicate time to review and merge your contribution.

If you find an issue you'd like to work on, leave a comment in the issue and we'll assign it to you so someone else doesn't work on it at the same time.

If you want to work on something that doesn't yet have an issue you should open one before submitting a PR. This gives us chance to discuss the change and let you know if it's something we'd be willing to merge before you spend time on it.

## Submitting a PR

There are a few conventions you can follow to make your PRs easier to review.

#### Work in a feature branch

You should work in a new branch unique to that PR like `add-btcpay-app` and submit a PR from there, not from `master`.

#### Give a clear description

Explain your changes clearly in the PR description, explain how they affect behaviour. Adding screenshots/GIFs here can be really helpful too.

You should also link to the open issue the PR is resolving and also any other related PRs. e.g if your change requires PRs in `getumbrel/umbrel` and `getumbrel/umbrel-manager`, both those PRs should link to each other.

#### Setup automated builds on Docker Hub

The repos that are published as Docker containers have automated builds setup that publish directly to Docker Hub via GitHub Actions.

You can set this up by creating an account on Docker Hub and generating an API key, then add the following secrets in your GitHub fork:

|                   |                           |
|-------------------|---------------------------|
| `DOCKER_HUB_USER` | Your Docker Hub username  |
| `DOCKER_USERNAME` | Your Docker Hub username  |
| `DOCKER_PASSWORD` | Your Docker Hub API token |

Now each time you push to a branch on your fork a new Docker image will be published on Docker Hub at `$DOCKER_HUB_USER/$REPO_NAME:$BRANCH_NAME` that anyone can pull down and test.

It's helpful if you drop your Docker Hub username in the PR description too so reviewers know where to pull the images from.

#### Keep PRs focused on a single concern

1 PR = 1 change. If you want to work on something else or spot a tiny bug, those things should be implemented in a separate PR.

This means when a PR is ready to be merged, we can squash everything down to a single commit in master, with a clear concise description and a link to the PR for further reference.

This in turn makes the git history in master very readable, negates the need for a changelog, and makes reviewing changes between releases and tracking down where bugs were introduced much simpler.

You can see the final squashed commits look in master here: https://github.com/getumbrel/umbrel/commits/master
