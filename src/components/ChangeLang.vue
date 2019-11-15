<template>
    <div class="change-lang">
        <div class="sl-nav">
            <ul>
                <li><i class="sl-select-lang select-lang-icon"></i>
                    <div class="triangle"></div>
                    <ul>
                        <li v-for="lang in langs" @click='$root.$i18n.locale = lang.code'>
                            <i :class="'sl-flag flag-' + lang.code"></i>
                            <span>{{lang.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeLang",
        data() {
            return {
                langs: [
                    {
                        name: 'English',
                        code: 'en'
                    },
                    {
                        name: 'Русский',
                        code: 'ru'
                    },
                    {
                        name: 'Українська',
                        code: 'ua'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .sl-nav {
        display: inline;
    }

    .sl-nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        display: inline-block;
    }

    .sl-nav li {
        cursor: pointer;
        padding-bottom: 10px;
    }

    .sl-nav li ul {
        display: none;
    }

    .sl-nav li:hover ul {
        position: absolute;
        top: 39px;
        right: -120px;
        display: block;
        background: #fff;
        width: 150px;
        padding-top: 0px;
        z-index: 5;
        border-radius: 5px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    .sl-nav li:hover .triangle {
        position: absolute;
        top: 25px;
        right: -10px;
        z-index: 10;
        height: 14px;
        overflow: hidden;
        width: 40px;
        background: transparent;
    }

    .sl-nav li:hover .triangle:after {
        content: '';
        display: block;
        z-index: 20;
        width: 15px;
        transform: rotate(45deg) translateY(0px) translatex(10px);
        height: 15px;
        background: #fff;
        border-radius: 2px 0px 0px 0px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }

    .sl-nav li ul li {
        position: relative;
        text-align: left;
        background: transparent;
        padding: 15px 15px;
        padding-bottom: 0;
        z-index: 2;
        font-size: 15px;
        color: #3c3c3c;
    }

    .sl-nav li ul li:last-of-type {
        padding-bottom: 15px;
    }

    .sl-nav li ul li span {
        padding-left: 5px;
    }

    .sl-nav li ul li span:hover, .sl-nav li ul li span.active {
        color: #004478;
        font-weight: bold;
    }

    .sl-flag {
        display: inline-block;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
        width: 15px;
        height: 15px;
        background: #aaa;
        border-radius: 50%;
        position: relative;
        top: 2px;
        overflow: hidden;
    }
    .sl-select-lang {
        display: inline-block;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        width: 25px;
        height: 25px;
        background: #aaa;
        border-radius: 50%;
        position: relative;
        top: 2px;
        overflow: hidden;
    }

    .select-lang-icon {
        width: 25px;
        height: 25px;
        background-size: cover;
        background-position: center center;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAALnSURBVEhLnZVLSBtRFIYVpLU1aWhTaYuLREg29QGhIAWh0GWlD0oXZtFgFyUGDVgwMaQBa1MptG5UUNRdE6hoQbrQLkQqXagLm0AX1iiiCG6EaOtCmhc5/e+djMxMZibqDx/ce8/M+TJzZzJlKnkIbgrDM+UW8BqNxs/CVD8/QA7MgxfABLRyHbibm5u/9/f35zY2Nsjr9SaFkn6YhCT8A1/AU3ARXAUvm5qa5vv6+rJra2skzXklJ1it1r9mszkVjUYLLYtzLonNZqNgMEjxeJySyeTJut1up56eHlpZWaF8Pl9QnE5yDfySNpbm4ODgRCKlpqaGOjs7aWFhgdrb2zUlpvr6+m+hUCijbCyNlkRBFnwCj4AstWNjY4VW2lGTVFZWUkNDQ9E6+ANkkUnY1bS1tfGTc7lcYVVd4nK5eK27u1tZ05dks1manZ2lra0tGh8fp4GBAb6uJllaWuI1th+KmrZkf3+fpqenKRAIkN/vJ4fDQbFYjNeUksbGRr4+MzNDqVSKqqqqpHVtCTthcHCQj7e3t8npdPIxi1IyOjpKR0dHVF1dTcfHx9TS0iKt698uMR0dHbSzs1OYySUGg4ELVldXqa6ujubm5mhoaOhsksXFRQqHw5ypqSnKZDIyCd4HfhxbZ0mn05RIJE4vOTw8JI/Hw99kRiQSoa6uLpmEPYHLy8tkMpmotbWVJicn+bn46yktYU3ZpjORMlKJxWLht0mcM3Z3d8ntdotzbcnIyAhtbm7ysTLKjVfi8/loYmJCnKtL2FWwzdTK+vq6rKka5eXl4rj0xovZ29uj4eFh9njGKioqAjj2PngPEkAmUKAvYY3Z44jGcTQOom4TDivKbRACP0FpSW9vr7Txa6zZhdKpYwGvgPj5LpKw77gfaP1ivVwCHvCEz4TcAM+FoX5cwCgMdXMF/AZf+eyMqQUfwTtwD1wGYi6Au+At+ADugAfg3DGAx+ANYE8VIwyeAXYVJVJW9h+cYWdfjojPTgAAAABJRU5ErkJggg==");
    }

    .flag-en {
        background-size: cover;
        background-position: center center;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAADuwAAA7sBrvcmpQAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAAN9SURBVDhPjZXrT9NQGMbrXf8HAcGJ25RN6TZQTMAr4iVDQlCJoibeNyQkom6ajEQTLzNE8YP6wQTxQpTExKgBUbxFDF4QL7B2mxsCLUwdwsJY19O1tad0sMkWfZInadJzfnnPed8+RWIpM7N8lhw1lzjs5B1ybhZOzNbQvYJdujxnY9PbulS1cVtStmWmtDy+eJ6fpEw3FStQE6FAzXxHRw9DyrJoMkHLQ3uy9KCh6QM1T23kZSoDodCUbZa2TpQAm8Jx3IXb9a0BpcbMxwHSr17bGAiUp5ey1w9UDmEpC6p4i2WyhBnTJCJlSXWg8VlQAPN19a0UhMYCvn7joJRoOXvjYOWQLWUB69i1j+oniCqJM6rCwqpCZ8H+YTI5kw08fi5CYaWdMYCt71wjd8vO+m3JSta5cy/VRxDcx3aMzsk160XYaANM39fnW4OO/H1+ESpVygJmAnDkUTPVnawRYWRPL9f2sRNkrTIDmdroUiot0xG5xrQF3hf0Or2Vdm7aL0GfB1mGYSOBwnOInJPB/txTQcPKIGzJimPinYqNSjMUI/fut92qvd1Chd3Sgg8P7D5MQejIwyeBKKBg754KKgQA5/F4+Pp7L4erL9+nwr5W03AL8RYbcW9JGYjy1oNBIlHHwWrIRB0bhhGJWvZXsYH+VXKI+bZ1B3BuKYl20TYcIRK0/sgK/td4koLHkuR/eb4fIWdrg7E2/Mv2GEBbojwoADXuWBv+5VgV2pLkbmSkm6z193p8YQfIH76Q97cf2me9MhAJ6V+0mvasLAJk6jKm98Gjwa72Lz53++cxd7V9qkEUi49vDo9NWsYJ9umLTgrO4HDNXUpoAhcJhHMYGhgM9a0qYrA0HVN95IIvddHoyIhWGQsQmax0hjzd1LNQd3wcVlsvwgaPnvILaRM12PB9wONh7Tm5AFMJ0KPVQ+IMqg3u7GzLVPFrUWWcKGhq/joOS9Byn7dX+EjCS//9pXR1/wx+7+5nSQwP2ZfnAVyVAS4duTgoW1y6UYSFJSSNNXxMCMvOPQ3ihcMa/UmA210MiWECdC3AF2qtEmZcMIL6EnQXvwiw5XlnQPz4wgA84uqNlQDDXYDs6DjHC2klYSZqzYbz+UJYuGMB+5fqmbGAVRtcGwpORR8znlD06jQlaip0OvrqIn8B33RrnU3N72/CbqLo3mnS8gghyB/q7kdLiA35UAAAAABJRU5ErkJggg==");
    }

    .flag-ru {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACbsAAAm7AQcQ/D0AAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAC9klEQVRYR82YzWsTQRjGx4gV7F8gohTBk9RDvnajSA9NdiNBBTEeS/ETbGJte7OH0JtHC+3Bk4LdpdFi9SCI9tp0dxPwIAiCVz1YMB4UAzVZnzc7UptOa5pkk3ngR3Z3Zt732Zk3MySsFbmuu69Wq/WDCJgC8yAPVjiLYA5MgDDopzF8uH9CooNgGLwAZSRtSuj7DSyBIdz28XCdE4IGQBoJPoEaJW1FNBb6CC7hNsDDtycEOwHeUGQvTfuiWNBrXB7naVoTgqTADy9s54XYVCZxnq55YVAAg8fBRj2Sj0KOCriFy+a/RBhwG1S9EP6LcpFJnn53oeNF4PvMNYpyggvchljoN4BOP70h3Rdyl8ERbmer0E51R9+sngoelvGxvR7RcAV0bCtpVbBA9Xie2/KE5314+MHr0nvBi4OPzY0cN3E87Pns/RV5gU5ze4xNP1p9fj/v/JKJ6cerRt1c6ObDQ+GsuQ5cqciYX1guF2CRMTMs7CABwbGFQRbMmFOiRhkgbyycNWZFjXJgzJJBU9woA4bJQlnzrbix95A3+Q3iwmhskAiDhTLmA0GDFJA3LLExKWqUAfLGgneMkKhRBiJ3zZPeUZeR8KjLGp/rRx3p2ujMs/GRexWZuDE686RujuQk1SFbV2uOrroyYGtK1UnGItweY6VQ6ICtK+9FnXuCphbcHNv6z4OViF6WYRZp9iw9luK2NuWiINHhVeOAboNJWnIZE/+IL8XPHEOH76KB3QCzt17Uzx7mdsSy9ZiOGqiIAvgKchYTUY3b2F2WFrtqa2pVGMgPNOV3UVNHePr/i2oAAzKOrmwIA3YSzBzK6jpPvTdZejSF7acsDNwBUHNfC7q697/f/tWargxguV/SMoiStARi4cWXHS18lKdpT7TkNJtY8nft7JW8rktOQjm341bSjp6m0/utZFSFyUXaEhoN7AQtJV5uwY5HwrTf8nD+io6itaRyqqgrkzA8j2XLgxXCewF1zkqoE4VhdXDbsdW0GPsD23HtD7VecwwAAAAASUVORK5CYII=");
        background-size: cover;
        background-position: center center;
    }

    .flag-ua {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAALtSURBVFhHzZbPTxNBFMenEjFqPBrCxfjjT6DQH4hG2AUOxlsPaqL+ISQ90x9b4aDFEk089iKJF9R49eSRBmmpXKpFlHa7S4y2dMb3llGCvkWWdrv7TT5J03kz75udmTePHUex/Er/tfnaWFTT46G08XIkZXwA9OGEzhH8jf/hGMZgLM6R093TjbkvV8KakR5Oml+HEqZwwnDK3IK5qYlH+mW5XPc0pW0NRjJmDhLt/p3YMUmzFUo3clPZrUG5fAcSIjCWqT+AL6aTyToA1qyParX7kCWwl8yhpueKpyKa8YxavJvAtj91fD5vza6egwP+llrQDULpnTfq8+pZmf5w4ZcLpXpn7jf4QTC3tGEnEejFttqB2w0m7M8kXghqYi8ZzTTuSTsHhaXEjdvqlGDSqI/nNgekrX1FNH2RmuAFEa2xKG3tCV8IGOi8CHeJYMJsqvPVS9IeY+G0nqYCvQSfVMscFsnjvK1uA81GNZYXfQw7DSrAe3bE9Ye1qwzbITrAe6KaEWfYs1GDfgC9MWwsqUE/gN7QoOfF2Q70xkaSdR5MGFB7/Ad6Y7traqu9pgo/gt5Yu6Rsi6Ii/AgHb2iwQA36ATBYYHxdeUEN+oH2urIEBidmqEE/gN5YszQZpQY9pwQGN5QwE++HTsJeb5JBHgKeKkLET1gdDS8rs1SQl6AnyxxKrE5dBMdNKtALwMvP72XlgrS3J15WH1PBXgClLytt7YuXxwfAuedFGzx845+nz0tbB8XLk3epSb2CFxUON/e2tEMLtvoJNbkXwMVYkDbsZZWddXWZWsBN4MMsY25p43CJTzfPwBP4mlrIDeBJe8XfhU/L9EeTWIn143bjuaAW7QbWmSurC0Ic8ctR4huTd9y43dZt/d+FOKrw2sMBzmIBpZI5AY7OD6y5tqWkEwmo7mA0AUkq+JhTBkggFopvBZ+vf14INyTysT7sNPhHdQbMLgEFYBvOVMsCjgRQwH4OWyaM/fPwOxJjvwC/xL9YBTvDYwAAAABJRU5ErkJggg==");
        background-size: cover;
        background-position: center center;
    }

</style>