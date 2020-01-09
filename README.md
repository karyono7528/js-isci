[![Build Status](https://api.travis-ci.com/laodemalfatih/js-isci.svg?branch=master)](https://travis-ci.org/laodemalfatih/js-isci)
[![codecov](https://codecov.io/gh/laodemalfatih/js-isci/branch/master/graph/badge.svg)](https://codecov.io/gh/laodemalfatih/js-isci)
[![Dependency Status](https://david-dm.org/laodemalfatih/js-isci.svg)](https://david-dm.org/laodemalfatih/js-isci)

[![](https://data.jsdelivr.com/v1/package/npm/js-isci/badge)](https://www.jsdelivr.com/package/npm/js-isci)
[![GitHub license](https://img.shields.io/github/license/laodemalfatih/js-isci?color=informational&style=flat-square)](https://github.com/laodemalfatih/js-isci/blob/master/LICENSE)

# Generate 1,5 MILLION++ unique strings(10 character) in 1 SECOND !!! <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREM2NDsiIGQ9Ik0yMjEuNTIzLDQ3OS45MDFsMTc3LjU3My0zMDUuNzU0YzQuMDIxLTYuOTIzLTEuNjgxLTE1LjQ0MS05LjYxNC0xNC4zNjNsLTExOC4xMTcsMTYuMDU1ICBsMjguMjIyLTE0OC4xNjVjMC45NTEtNC45OTUtNS40ODgtNy44NTctOC41NTgtMy44MDRMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2ICBsLTQyLjY5MSwyMjAuNTcxQzIxMS42MTIsNDgxLjg5MiwyMTguODAxLDQ4NC41ODcsMjIxLjUyMyw0NzkuOTAxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDODUwOyIgZD0iTTE3MS4wMzQsMjM4LjAwMWMtMy4yNjEsMC4yNjEtNS40MjctMy4zMDQtMy42OTMtNi4wNzhMMjk3Ljg3OSwyMy4wNjEgIGMtMS45NDItMS41MzYtNC45OTktMS42MzUtNi44NTEsMC44MDlMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2bC00Mi42OTEsMjIwLjU3MSAgYy0wLjU3NSwyLjk3NSwxLjQzMiw1LjA2OCwzLjc3Nyw1LjU3bDczLjE1NC0yMzEuNDg1YzMuNDI5LTEwLjg1LTUuMjIyLTIxLjcyLTE2LjU2Ni0yMC44MTJMMTcxLjAzNCwyMzguMDAxeiIvPgo8cGF0aCBkPSJNNDE1LjIwOCwxNTIuOTYzYy0xLjU5My0yLjM4MS00LjQxNC0zLjY0NS03LjI0Mi0zLjI2bC0xMjcuMjgzLDE3LjMwMWwxNi4zNzItODUuOTU0YzAuNzc1LTQuMDY5LTEuODk1LTcuOTk2LTUuOTY0LTguNzcxICBjLTQuMDYtMC43NzQtNy45OTUsMS44OTYtOC43NzEsNS45NjRsLTE4LjMyMiw5Ni4xOTNjLTAuNDUyLDIuMzcsMC4yNjUsNC44MTMsMS45MjUsNi41NjRjMS42NTksMS43NTEsNC4wNjMsMi41OTYsNi40NTIsMi4yNzEgIGwxMjIuNDExLTE2LjYzOUwyMjMuMDI5LDQ2Mi4zNzRsMzAuMzU3LTE1Ni44NDljMC43ODctNC4wNjYtMS44NzEtOC4wMDEtNS45MzgtOC43ODhjLTQuMDY2LTAuNzktOC4wMDIsMS44NzEtOC43ODgsNS45MzggIGwtMzguNzg3LDIwMC40Yy0wLjY5NSwzLjU5MywxLjMwNCw3LjE2Myw0LjczLDguNDQ3YzAuODYzLDAuMzI0LDEuNzUzLDAuNDc5LDIuNjMxLDAuNDc5YzIuNjA4LDAsNS4xMTItMS4zNjYsNi40ODctMy43MzQgIEw0MTUuNDYsMTYwLjkwMUM0MTYuODk5LDE1OC40MjQsNDE2LjgwMiwxNTUuMzQ0LDQxNS4yMDgsMTUyLjk2M3oiLz4KPHBhdGggZD0iTTI0NC44NjYsMjcwLjYxMmMtMC43ODcsNC4wNjYsMS44NzEsOC4wMDEsNS45MzgsOC43ODhjMC40ODEsMC4wOTMsMC45NiwwLjEzOCwxLjQzMywwLjEzOGMzLjUyMSwwLDYuNjYyLTIuNDksNy4zNTUtNi4wNzYgIGwzLjEwNC0xNi4wMzZjMC40NTItMi4zMzQtMC4yMjktNC43NDMtMS44MzYtNi40OTVjLTEuNjA3LTEuNzUxLTMuOTM5LTIuNjMyLTYuMzEyLTIuMzg5bC0xMzUuMDg5LDE0LjIybDE3MC42MS0yMjUuMjA2ICBsLTEuNjQyLDguNjIyYy0wLjc3NSw0LjA2OSwxLjg5NSw3Ljk5Niw1Ljk2NCw4Ljc3MWM0LjA2MywwLjc3Nyw3Ljk5Ni0xLjg5NSw4Ljc3MS01Ljk2NGw3LjYzNS00MC4wODEgIGMwLjY1Mi0zLjQyMi0xLjEzOC02Ljg0Mi00LjMyLTguMjU3Yy0zLjE4Ni0xLjQxNS02LjkyMi0wLjQ1Mi05LjAyNSwyLjMyNUw5Ny4wNDgsMjY3LjUwNGMtMS44MDUsMi4zODQtMi4wMjIsNS42MS0wLjU1NCw4LjIxNSAgYzEuNDY5LDIuNjA0LDQuMzM3LDQuMDg0LDcuMzE3LDMuNzczbDE0Mi4yMzMtMTQuOTcyTDI0NC44NjYsMjcwLjYxMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" height=40/> <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREM2NDsiIGQ9Ik0yMjEuNTIzLDQ3OS45MDFsMTc3LjU3My0zMDUuNzU0YzQuMDIxLTYuOTIzLTEuNjgxLTE1LjQ0MS05LjYxNC0xNC4zNjNsLTExOC4xMTcsMTYuMDU1ICBsMjguMjIyLTE0OC4xNjVjMC45NTEtNC45OTUtNS40ODgtNy44NTctOC41NTgtMy44MDRMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2ICBsLTQyLjY5MSwyMjAuNTcxQzIxMS42MTIsNDgxLjg5MiwyMTguODAxLDQ4NC41ODcsMjIxLjUyMyw0NzkuOTAxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDODUwOyIgZD0iTTE3MS4wMzQsMjM4LjAwMWMtMy4yNjEsMC4yNjEtNS40MjctMy4zMDQtMy42OTMtNi4wNzhMMjk3Ljg3OSwyMy4wNjEgIGMtMS45NDItMS41MzYtNC45OTktMS42MzUtNi44NTEsMC44MDlMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2bC00Mi42OTEsMjIwLjU3MSAgYy0wLjU3NSwyLjk3NSwxLjQzMiw1LjA2OCwzLjc3Nyw1LjU3bDczLjE1NC0yMzEuNDg1YzMuNDI5LTEwLjg1LTUuMjIyLTIxLjcyLTE2LjU2Ni0yMC44MTJMMTcxLjAzNCwyMzguMDAxeiIvPgo8cGF0aCBkPSJNNDE1LjIwOCwxNTIuOTYzYy0xLjU5My0yLjM4MS00LjQxNC0zLjY0NS03LjI0Mi0zLjI2bC0xMjcuMjgzLDE3LjMwMWwxNi4zNzItODUuOTU0YzAuNzc1LTQuMDY5LTEuODk1LTcuOTk2LTUuOTY0LTguNzcxICBjLTQuMDYtMC43NzQtNy45OTUsMS44OTYtOC43NzEsNS45NjRsLTE4LjMyMiw5Ni4xOTNjLTAuNDUyLDIuMzcsMC4yNjUsNC44MTMsMS45MjUsNi41NjRjMS42NTksMS43NTEsNC4wNjMsMi41OTYsNi40NTIsMi4yNzEgIGwxMjIuNDExLTE2LjYzOUwyMjMuMDI5LDQ2Mi4zNzRsMzAuMzU3LTE1Ni44NDljMC43ODctNC4wNjYtMS44NzEtOC4wMDEtNS45MzgtOC43ODhjLTQuMDY2LTAuNzktOC4wMDIsMS44NzEtOC43ODgsNS45MzggIGwtMzguNzg3LDIwMC40Yy0wLjY5NSwzLjU5MywxLjMwNCw3LjE2Myw0LjczLDguNDQ3YzAuODYzLDAuMzI0LDEuNzUzLDAuNDc5LDIuNjMxLDAuNDc5YzIuNjA4LDAsNS4xMTItMS4zNjYsNi40ODctMy43MzQgIEw0MTUuNDYsMTYwLjkwMUM0MTYuODk5LDE1OC40MjQsNDE2LjgwMiwxNTUuMzQ0LDQxNS4yMDgsMTUyLjk2M3oiLz4KPHBhdGggZD0iTTI0NC44NjYsMjcwLjYxMmMtMC43ODcsNC4wNjYsMS44NzEsOC4wMDEsNS45MzgsOC43ODhjMC40ODEsMC4wOTMsMC45NiwwLjEzOCwxLjQzMywwLjEzOGMzLjUyMSwwLDYuNjYyLTIuNDksNy4zNTUtNi4wNzYgIGwzLjEwNC0xNi4wMzZjMC40NTItMi4zMzQtMC4yMjktNC43NDMtMS44MzYtNi40OTVjLTEuNjA3LTEuNzUxLTMuOTM5LTIuNjMyLTYuMzEyLTIuMzg5bC0xMzUuMDg5LDE0LjIybDE3MC42MS0yMjUuMjA2ICBsLTEuNjQyLDguNjIyYy0wLjc3NSw0LjA2OSwxLjg5NSw3Ljk5Niw1Ljk2NCw4Ljc3MWM0LjA2MywwLjc3Nyw3Ljk5Ni0xLjg5NSw4Ljc3MS01Ljk2NGw3LjYzNS00MC4wODEgIGMwLjY1Mi0zLjQyMi0xLjEzOC02Ljg0Mi00LjMyLTguMjU3Yy0zLjE4Ni0xLjQxNS02LjkyMi0wLjQ1Mi05LjAyNSwyLjMyNUw5Ny4wNDgsMjY3LjUwNGMtMS44MDUsMi4zODQtMi4wMjIsNS42MS0wLjU1NCw4LjIxNSAgYzEuNDY5LDIuNjA0LDQuMzM3LDQuMDg0LDcuMzE3LDMuNzczbDE0Mi4yMzMtMTQuOTcyTDI0NC44NjYsMjcwLjYxMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" height=40/> <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREM2NDsiIGQ9Ik0yMjEuNTIzLDQ3OS45MDFsMTc3LjU3My0zMDUuNzU0YzQuMDIxLTYuOTIzLTEuNjgxLTE1LjQ0MS05LjYxNC0xNC4zNjNsLTExOC4xMTcsMTYuMDU1ICBsMjguMjIyLTE0OC4xNjVjMC45NTEtNC45OTUtNS40ODgtNy44NTctOC41NTgtMy44MDRMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2ICBsLTQyLjY5MSwyMjAuNTcxQzIxMS42MTIsNDgxLjg5MiwyMTguODAxLDQ4NC41ODcsMjIxLjUyMyw0NzkuOTAxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDODUwOyIgZD0iTTE3MS4wMzQsMjM4LjAwMWMtMy4yNjEsMC4yNjEtNS40MjctMy4zMDQtMy42OTMtNi4wNzhMMjk3Ljg3OSwyMy4wNjEgIGMtMS45NDItMS41MzYtNC45OTktMS42MzUtNi44NTEsMC44MDlMMTE2LjQzNSwyNTQuMzMzYy01LjA4NSw2LjcxMywwLjI5OSwxNi4yNTcsOC42NzUsMTUuMzc1TDI1NS4zMzMsMjU2bC00Mi42OTEsMjIwLjU3MSAgYy0wLjU3NSwyLjk3NSwxLjQzMiw1LjA2OCwzLjc3Nyw1LjU3bDczLjE1NC0yMzEuNDg1YzMuNDI5LTEwLjg1LTUuMjIyLTIxLjcyLTE2LjU2Ni0yMC44MTJMMTcxLjAzNCwyMzguMDAxeiIvPgo8cGF0aCBkPSJNNDE1LjIwOCwxNTIuOTYzYy0xLjU5My0yLjM4MS00LjQxNC0zLjY0NS03LjI0Mi0zLjI2bC0xMjcuMjgzLDE3LjMwMWwxNi4zNzItODUuOTU0YzAuNzc1LTQuMDY5LTEuODk1LTcuOTk2LTUuOTY0LTguNzcxICBjLTQuMDYtMC43NzQtNy45OTUsMS44OTYtOC43NzEsNS45NjRsLTE4LjMyMiw5Ni4xOTNjLTAuNDUyLDIuMzcsMC4yNjUsNC44MTMsMS45MjUsNi41NjRjMS42NTksMS43NTEsNC4wNjMsMi41OTYsNi40NTIsMi4yNzEgIGwxMjIuNDExLTE2LjYzOUwyMjMuMDI5LDQ2Mi4zNzRsMzAuMzU3LTE1Ni44NDljMC43ODctNC4wNjYtMS44NzEtOC4wMDEtNS45MzgtOC43ODhjLTQuMDY2LTAuNzktOC4wMDIsMS44NzEtOC43ODgsNS45MzggIGwtMzguNzg3LDIwMC40Yy0wLjY5NSwzLjU5MywxLjMwNCw3LjE2Myw0LjczLDguNDQ3YzAuODYzLDAuMzI0LDEuNzUzLDAuNDc5LDIuNjMxLDAuNDc5YzIuNjA4LDAsNS4xMTItMS4zNjYsNi40ODctMy43MzQgIEw0MTUuNDYsMTYwLjkwMUM0MTYuODk5LDE1OC40MjQsNDE2LjgwMiwxNTUuMzQ0LDQxNS4yMDgsMTUyLjk2M3oiLz4KPHBhdGggZD0iTTI0NC44NjYsMjcwLjYxMmMtMC43ODcsNC4wNjYsMS44NzEsOC4wMDEsNS45MzgsOC43ODhjMC40ODEsMC4wOTMsMC45NiwwLjEzOCwxLjQzMywwLjEzOGMzLjUyMSwwLDYuNjYyLTIuNDksNy4zNTUtNi4wNzYgIGwzLjEwNC0xNi4wMzZjMC40NTItMi4zMzQtMC4yMjktNC43NDMtMS44MzYtNi40OTVjLTEuNjA3LTEuNzUxLTMuOTM5LTIuNjMyLTYuMzEyLTIuMzg5bC0xMzUuMDg5LDE0LjIybDE3MC42MS0yMjUuMjA2ICBsLTEuNjQyLDguNjIyYy0wLjc3NSw0LjA2OSwxLjg5NSw3Ljk5Niw1Ljk2NCw4Ljc3MWM0LjA2MywwLjc3Nyw3Ljk5Ni0xLjg5NSw4Ljc3MS01Ljk2NGw3LjYzNS00MC4wODEgIGMwLjY1Mi0zLjQyMi0xLjEzOC02Ljg0Mi00LjMyLTguMjU3Yy0zLjE4Ni0xLjQxNS02LjkyMi0wLjQ1Mi05LjAyNSwyLjMyNUw5Ny4wNDgsMjY3LjUwNGMtMS44MDUsMi4zODQtMi4wMjIsNS42MS0wLjU1NCw4LjIxNSAgYzEuNDY5LDIuNjA0LDQuMzM3LDQuMDg0LDcuMzE3LDMuNzczbDE0Mi4yMzMtMTQuOTcyTDI0NC44NjYsMjcwLjYxMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" height=40/>

```bash
1-keyword_isci_1 x 1,499,445 ops/sec ±0.91% (92 runs sampled)
1-keyword_isci_2 x 1,518,254 ops/sec ±0.65% (94 runs sampled)
1-keyword_isci_3 x 1,505,860 ops/sec ±0.79% (92 runs sampled)
```

See and run [`benchmark.js`](https://github.com/laodemalfatih/js-isci/blob/master/benchmark.js) file for concrete proof.

# ISCI Library for Javascript

# What is Identification SCheme Information (ISCI) ?

_Identification Information Schema_ (**ISCI**) is a scheme that contains information from identification labels. **ISCI** can be used instead of _UUID_, _Increment_, _Timestamp_, or _Hash_ in the _ID_ component. **ISCI** can be used across platforms. Depends on the availability of libraries from each language. **ISCI** uses _JSON_ as a format in defining schemas. In cases in the field, **ISCI** can be stored in _databases_ such as **MongoDB**, **MYSQL** or **REDIS** (as _JSON_ string).

# Usage

## Instalation

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/js-isci@latest/build/index.min.js" />
```

Module:

```bash
# You can use npm or yarn
npm install isci
```

## Usage In Browser

```html
<script src="https://cdn.jsdelivr.net/npm/js-isci@latest/build/index.min.js" />

<script>
  isci.next(yourIsci);
</script>
```

## Example

<details>
<summary><b>Code</b></summary>

```js
const isci = require('./index');

const sampleIsci = {
  pattern: '<index>-[keyword_1]-[keyword_2]-[keyword_3]',
  keywords: {
    keyword_1: {
      type: 'randCharset',
      length: 5,
      charset: 'abcdefg'
    },
    keyword_2: {
      type: 'incrSingleCharset',
      currentIndex: 0,
      valueIncrease: 1,
      length: 6,
      charset: 'hijkl'
    },
    keyword_3: {
      type: 'incrMultiCharsets',
      currentIndex: 0,
      valueIncrease: 1,
      charsets: ['mnopq', 'rstuv', 'wxyz', '01234', '56789']
    }
  }
};

let i = 0;
while (i++ < 5) {
  console.log(
    isci.next(sampleIsci, {
      index: i
    })
  );
}
```

</details>

Output:

```bash
1-ceada-hhhhhh-mrw05
2-beddf-hhhhhi-mrw06
3-aefgb-hhhhhj-mrw07
4-dbfea-hhhhhk-mrw08
5-bacgd-hhhhhl-mrw09
```

**\* You can use the result above as an _ID_ for your data like _`documentId`_, _`secretId`_, _`userId`_, etc.**

## Formats

### Methods

#### `.next(isci, params) string`

Params:

- `isci.pattern` - See [Pattern Format](https://github.com/laodemalfatih/js-isci#pattern-format)
- `isci.keywords` - Keyword options.

Get Next ID.

#### `.safeNext(isci, params) object`

Return:

- `object.result` - The next ID
- `object.updatedIsci` - Cloning from the original `isci`.

Same as `.next` method, but this function does not change the original `isci` and returning an `object`.

## Pattern Format

### Keyword: `[keywordName]`

### Param: `<paramName>`

Example:

```js
const pattern1 = '<index>_[departementSection]_[randomCharacter]';
const pattern2 = '[randomName]-[timestamp]';
```

## Keyword Format

### `{ [keywordName] : keywordProperties }`

- `keywordName` `string` - The name you enter in the `pattern`
- `keywordProperties.types` - Type of keyword
- `keywordProperties.<etc>` - Explained bellow. Different, depending on keyword type.

## Supported Keyword Types

- [randCharset](#randcharset)
- [incrNumber](#incrNumber)
- [incrSingleCharset](#incrSingleCharset)
- [incrMultiCharsets](#incrMultiCharsets)
- [currentDate](#currentDate)
- [currentUnixTimestamp](#currentUnixTimestamp)

### randCharset

Generate random strings from available charset.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| length          | `number` |
| minLength       | `number` |
| maxLength       | `number` |
| charset         | `string` |

> You have to choose one, use `length` or use `minLength` and `maxLength`. The second choice causes the system to generate random length between `minLength` (inclusive) and `maxLength` (inclusive)

#### Example:

Options:

```js
{
  length: 6,
  charset: '1234abcd', // You can replace this with any character
}
```

Output: (Run 4x)

```bash
bdaa13
114a3b
b441c4
4dca4c
```

### incrNumber

Increment number with specific value.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| currentIndex    | `number` |
| valueIncrease   | `number` |
| startNumber     | `number` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 3,
  startNumber: 1
}
```

Output: (Run 5x)

```bash
4
7
10
13
16
```

### incrSingleCharset

Increment character based on its index position in charset.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| currentIndex    | `number` |
| valueIncrease   | `number` |
| length          | `number` |
| charset         | `string` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 1,
  length: 5,
  charset: 'abcdefg'
}
```

Output: (Run 6x)

```bash
aaaaa
aaaab
aaaac
aaaad
aaaae
aaaaf
```

### incrMultiCharsets

Same as [`incrSingleCharset`](#incrSingleCharset), the difference is it uses many charsets at once and the length of result follow the length of the `charsets`.

#### Keyword Properties:

| Properties Name | Type       |
| --------------- | ---------- |
| currentIndex    | `number`   |
| valueIncrease   | `number`   |
| charsets        | `[string]` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 1,
  charsets: ['abc', '123', 'def', 'ghi']
}
```

Output: (Run 4x)

```bash
a1dg
a1dh
a1di
a1eg
```

### currentDate

Only date. nothing is different. it looks like no description is needed.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| format          | `string` |

> `format` string can be anything, but the following letters will be replaced (and leading zeroes added if necessary) ... See: [date-format](https://github.com/nomiddlename/date-format#formatting-dates-as-strings) for more information.

#### Example:

Options:

```js
{
  format: 'yyyy-MM-dd/hh-mm-ss.SSS';
}
```

Output: (Run 1x)

```bash
2020-01-09/15-00-00.000
```

### currentUnixTimestamp

Everything has been explained in [unixtimestamp.com](https://www.unixtimestamp.com/)

#### Keyword Properties:

_No property needed_

#### Example:

Output: (Run 3x)

```bash
1578560571114
1578560571116
1578560571117
```

#### See [`examples.js`](https://github.com/laodemalfatih/js-isci/blob/master/examples.js) file for more example usage.
