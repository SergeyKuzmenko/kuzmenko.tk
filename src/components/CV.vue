<template>
  <div class="page page-cv">
    <BackButton></BackButton>
    <v-dialog adaptive="true" />
    <div class="content content-cv">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark page-navbar gradient">
        <div class="container">
          <a class="navbar-brand logo" href="/cv">{{$t("cv")}}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item item">
              <li class="nav-item item">
                <a class="nav-link" href="#work-experience">{{$t("work_experience")}}</a>
              </li>
              <li class="nav-item item">
                <a class="nav-link" href="#education">{{$t("education")}}</a>
              </li>
              <li class="nav-item item">
                <a class="nav-link" href="#skills">{{$t("skills")}}</a>
              </li>
              <li class="nav-item item">
                <a class="nav-link" href="#hobbies">{{$t("hobbies")}}</a>
              </li>
              <li class="nav-item item">
                <a class="nav-link" href="#contact-info">{{$t("contact_info")}}</a>
              </li>
            </ul>
          </div>
          <!-- <a href="#" class="btn btn-danger download-template" role="button" aria-disabled="true">{{$t("download")}}</a> -->
        </div>
      </nav>
      <main class="page cv-page">
        <section class="cv-block block-intro ">
          <div class="container" style="margin-top: -100px; margin-bottom: -50px;">
            <div class="avatar">
              <img class="img-fluid rounded-circle" src="https://www.gravatar.com/avatar/8d10d187365a9aceb2b2d0965ba7dd97?s=200">
            </div>
            <p v-html="$t('about')"></p>
            <a href="#contact-info" class="btn btn-outline-primary">{{$t("hire_me")}}</a>
          </div>
        </section>
        <section class="cv-block info">
          <div class="container">
            <div class="work-experience group" id="work-experience">
              <h2 class="text-center">{{$t("work_experience")}}</h2>
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Наладчик станков с ЧПУ</h3>
                    <h4 class="organization">Гидросила АПМ, ЧАО</h4>
                  </div>
                  <div class="col-md-6">
                    <time class="period">03/2016 - сейчас</time>
                  </div>
                </div>
                <p class="text-muted"><b>Обязаности:</b>
                  <p class="text-muted">
                    <ul class="text-muted"><li>Подготовка токарных станков с ЧПУ к работе;&nbsp;</li><li>Подготовка и&nbsp;установка режущего инструмента;</li><li>Подготовка и установка различных приспособлений;</li><li>Написание управляющих программ разной сложности;</li><li>Работа с различными измерительными инструментами;</li><li>Измерение и контроль размеров изделий;</li><li>Ведение карт обмеров и стат. контроля;</li><li>Чтение и понимание технической документации;</li></ul>
                  </p>
                </p>
                <p class="text-muted"><b>Оборудование:</b> EMCO Maxxturn 65M (в т.ч. 2-х шпиндельный), Doosan Puma 2100, MAS SP280. </p>
                <p class="text-muted"><b>СЧПУ:</b> Siemens, Fanuc.</p>
              </div>
            </div>
            <div class="education group" id="education">
              <h2 class="text-center">{{$t("education")}}</h2>
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Центральноукраинский национальный технический университет</h3>
                    <h4 class="organization">ВУЗ, Магистр</h4>
                  </div>
                  <div class="col-md-6">
                    <time class="period">09/2019 - 07/2021</time>
                  </div>
                </div>
                <p class="text-muted">Механико-технологический факультет, Металлорежущие станки, г. Кропивницкий (Кировоград)</p>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Центральноукраинский национальный технический университет</h3>
                    <h4 class="organization">ВУЗ, Бакалавр</h4>
                  </div>
                  <div class="col-md-6">
                    <time class="period">09/2016 - 07/2019</time>
                  </div>
                </div>
                <p class="text-muted">Механико-технологический факультет, Технология машиностроения, Отраслевое машиностроение, г. Кропивницкий (Кировоград)</p>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Кировоградский машиностроительный колледж КНТУ</h3>
                    <h4 class="organization">Колледж, младший специалист</h4>
                  </div>
                  <div class="col-md-6">
                    <time class="period">09/2012 - 07/2016</time>
                  </div>
                </div>
                <p class="text-muted">Специальность: Технология обработки материалов на станках и автоматических линиях, г. Кропивницкий (Кировоград)</p>
              </div>
            </div>
            <div class="skills group" id="skills">
              <h2 class="text-center">{{$t("skills")}}</h2>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <h3>HTML</h3>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                      </div>
                    </div>
                  </div>
                </div>
               <!--  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p> -->
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <h3>JS</h3>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p> -->
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <h3>PHP</h3>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p> -->
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <h3>CSS</h3>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p> -->
              </div>
            </div>
            <div class="hobbies group" id="hobbies">
              <h2 class="text-center">{{$t("hobbies")}}</h2>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <p class="text-center text-muted">В свободное время веду разработку Adnroid-приложения на базе мобильной среды разработки Apache Cordova. В приложении собранна различная информация и материалы для работы с СЧПУ разных моделей и станков (Fanuc, HAAS, Siemens).</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-info group" id="contact-info">
              <h2 class="text-center">{{$t("contact_info")}}</h2>
              <div class="item">
                <div class="row">
                  <div class="col-md-12">
                    <div class="contact-info info-card">
                      <div class="row">
                        <div class="col-1">
                          <i class="ion-person icon"></i>
                        </div>
                        <div class="col-9">
                          <span>{{$t("full_name")}}</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-1">
                          <i class="ion-ios-telephone icon"></i>
                        </div>
                        <div class="col-9">
                          <span>
                            <a href="#contact-info" v-on:click="showPnone">+38(XXX)XX-XX-XXX</a>
                          </span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-1">
                          <i class="ion-at icon"></i>
                        </div>
                        <div class="col-9">
                          <span><a href="mailto:kuzmenko.sergey@ukr.net">kuzmenko.sergey@ukr.net</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="page-footer">
          <div class="container">
            <div class="social-icons">
              <a href="https://facebook.com/kuzmenko.tk" target="_blank"><i class="ion-social-facebook" title="Facebook"></i></a>
              <a href="https://www.instagram.com/sergey__kuzmenko/" target="_blank"><i class="ion-social-instagram-outline" title="Instagram"></i></a>
              <a href="https://twitter.com/KuzmenkoSA" target="_blank"><i class="ion-social-twitter" title="Twitter"></i></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>
<script>
import BackButton from '../components/BackButton'

export default {
  name: 'CV',
  components: {
    BackButton
  },
  methods: {
    async showPnone(event) {
      // let response = await fetch('http://api.kuzmenko.tk', {mode: 'no-cors'})
      // if (response) { // если HTTP-статус в диапазоне 200-299
      //   // получаем тело ответа (см. про этот метод ниже)
      //   let json = response.json();
      // } else {
      //   alert("Ошибка HTTP: " + response.status);
      // }
      this.$modal.show('dialog', {
        text: '<center><b>+38(050)56-92-360</b></center>',
        buttons: [{
            title: 'Позвонить',
            handler: () => {
              window.location = 'tel:+380505692360'
            }
          },
          {
            title: 'Закрыть'
          }
        ]
      })
    }
  },
  created: function () {
    this.$nextTick(function () {
      document.title = this.$root.$t('full_name') + ' — ' + this.$root.$t('cv')
    })
  }
}

</script>
<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import url("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");

.page-navbar.navbar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.page-navbar .navbar-nav .nav-item a {
  font-weight: bold;
}

.page-navbar.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.page-navbar .logo {
  font-size: 1.5rem;
}

.page-navbar.fixed-top+.page {
  padding-top: 62px;
}

.download-template {
  color: #fff;
  background-color: #ed36ad;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  padding: 10px 24px;
  border-radius: 40px;
}

.download-template:hover {
  background-color: #fb5ec4;
}

.gradient {
  background: linear-gradient(120deg, #7f70f5, #0ea0ff);
  color: #fff !important;
}

.cv-block {
  padding-bottom: 60px;
  padding-top: 60px;
}

.cv-block.block-intro {
  text-align: center;
  max-width: 850px;
  margin: auto;
}

.cv-block.block-intro .about-me {
  max-width: 800px;
  margin: auto;
}

.cv-block.block-intro p {
  font-size: 1.5em;
  font-weight: 200;
  margin-bottom: 30px;
}

.cv-block.block-intro .btn {
  padding: 0.375rem 1rem;
  border-radius: 2em;
}

.cv-block.block-intro .avatar {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  border-radius: 100px;
  margin-bottom: 30px;
}

.cv-block.info {
  padding-top: 70px;
}

.cv-block.info h2 {
  font-weight: bold;
  margin-bottom: 50px;
}

.cv-block.info h3 {
  font-size: 1.3rem;
}

.cv-block.info .group {
  max-width: 800px;
  margin: auto;
}

.cv-block.info .group:not(:first-child) {
  margin-top: 50px;
}

.cv-block.info .group .period {
  font-size: 0.8rem;
  float: none;
  font-weight: bold;
  margin-top: 4px;
  color: #6c757d;
  opacity: 0.8;
}

.cv-block.info .group .organization {
  font-size: 0.85em;
  background-color: #0ea0ff;
  display: inline-block;
  color: #fff;
  padding: 2px 8px;
  border-radius: 2em;
}

.cv-block.info .education.group .organization {
  background-color: #20c997;
}

.cv-block.info .group .item {
  padding-bottom: 10px;
  margin-bottom: 25px;
  border-bottom: 1px solid #eee;
}

.cv-block.info .group h2+.item {
  padding-top: 25px;
  border-top: 1px solid #eee;
}

.cv-block.info .group .item .row {
  margin-bottom: 5px;
}

.cv-block.info .work-experience h3,
.cv-block.info .education h3 {
  font-weight: bold;
}

.cv-block .info-card {
  padding: 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  height: 100%;
}

.cv-block .info-card h2 {
  margin-top: 0;
  margin-bottom: 24px !important;
  font-size: 1.4rem;
}

.cv-block .info-card.skills h3 {
  margin-top: 25px;
  font-size: 1rem;
  font-weight: bold;
}

.cv-block .info-card.skills .progress {
  height: 3px;
}

.cv-block .info-card.contact-info .icon {
  font-size: 1.3em;
  color: #c9c9c9;
  position: relative;
  bottom: 4px;
}

.cv-block.info .hobbies p {
  max-width: 700px;
  margin: auto;
  font-size: 1.2em;
}

.page-footer {
  padding-top: 32px;
  border-top: 1px solid #ddd;
  text-align: center;
  padding-bottom: 20px;
}

.page-footer a {
  display: inline-block;
  margin: 0px 10px;
  color: #282b2d;
  font-size: 18px;
}

.page-footer .links {
  display: inline-block;
}

.page-footer .social-icons {
  margin-top: 20px;
  margin-bottom: 16px;
}

.page-footer .social-icons a {
  font-size: 18px;
  margin: 0 3px;
  color: #ffffff;
  border: 1px solid;
  opacity: 0.75;
  border-radius: 50%;
  width: 36px;
  display: inline-block;
  height: 36px;
  text-align: center;
  background-color: #c5c9d2;
  line-height: 34px;
}

.page-footer .social-icons a:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  .cv-block {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .cv-block.info .group .period {
    float: right;
  }
}

@media (min-width: 576px) {
  .navbar {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }

  .portfolio-navbar.fixed-top+.page {
    padding-top: 6rem;
  }
}

</style>
