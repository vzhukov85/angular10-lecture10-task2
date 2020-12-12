import { Injectable } from '@angular/core';

export interface Task {
  stackblitz?: string;
  github?: string;
  projectName?: string;
  description?: string;
  links?: string[];
  num: number;
}

export interface Homework {
  num: number;
  links?: string[];
  info?: string;
  tasks: Task[];
}

const homework1: Homework = {
  num: 1,
  tasks: [
    {
      num: 1,
      links: ['https://www.youtube.com/embed/sL6VvWOAuLE'],
    },
    {
      num: 2,
      links: [
        'https://docs.npmjs.com/cli/version.html',
        'https://blog.popstas.ru/blog/2020/04/15/npm-version/',
      ],
    },
    {
      num: 3,
      links: ['https://docs.npmjs.com/cli/install.html'],
    },
    {
      num: 4,
      links: ['https://docs.npmjs.com/cli/uninstall.html'],
    },
    {
      num: 5,
      links: ['https://docs.npmjs.com/cli/update.html'],
    },
    {
      num: 6,
      links: ['https://docs.npmjs.com/cli/run-script.html'],
    },
    {
      num: 7,
      links: ['https://www.youtube.com/embed/JfpCicDUMKc'],
    },
    {
      num: 8,
      links: ['https://www.youtube.com/embed/26pHLqNmx3Q'],
    },
    {
      num: 10,
      links: [
        'https://app.creately.com/diagram/create/project/home',
        'https://stackblitz.com/',
      ],
    },
    {
      num: 11,
      links: ['https://www.youtube.com/embed/RJoNVnFWxRs'],
    },
    {
      num: 12,
      projectName: 'angular10-lecture1-task12',
    },
    {
      num: 13,
      links: [
        'http://typescript-lang.ru/docs/Modules.html#%D0%98%D0%BC%D0%BF%D0%BE%D1%80%D1%82',
      ],
    },
  ],
};

const homework2: Homework = {
  num: 2,
  tasks: [
    {
      num: 1,
      projectName: 'angular10-lecture2-task1',
      links: [
        'https://cli.angular.io/',
        'https://xsltdev.ru/angular/tutorial/angular-cli/',
        'https://habr.com/ru/post/349322/',
      ],
    },
    {
      num: 2,
      links: ['https://www.youtube.com/embed/BL0onSQtKLY'],
    },
    {
      num: 3,
      links: ['https://www.youtube.com/embed/yQpg1L3jH_E'],
    },
    {
      num: 4,
      links: ['https://www.youtube.com/embed/9YfCaddI5bgE'],
    },
    {
      num: 5,
      projectName: 'angular10-lecture2-task5',
      links: [
        'https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility_collapse',
        'https://www.w3schools.com/cssref/pr_class_visibility.asp',
      ],
    },
    {
      num: 6,
      links: ['https://www.youtube.com/embed/BgUiEuNaGuE'],
    },
    {
      num: 7,
      links: [
        'https://ultimatecourses.com/blog/difference-change-ngmodelchange-angular',
        'https://xsltdev.ru/angular/tutorial/angular-templates/',
      ],
    },
    {
      num: 8,
      links: [
        'https://www.youtube.com/embed/FhKW6wLlPaE',
        'https://www.youtube.com/embed/dfNAim-ULx',
        'https://angular.io/api/core/Component',
        'https://webdraftt.com/tutorial/angular-components',
        'https://xsltdev.ru/angular/tutorial/application-structure/',
      ],
    },
    {
      num: 9,
      links: ['https://www.youtube.com/embed/1jTZzK09pfw'],
    },
    {
      num: 10,
      projectName: 'angular10-lecture2-task10',
      links: [
        'ttp://htmlbook.ru/html/ul',
        'https://xsltdev.ru/angular/tutorial/angular-cli/',
      ],
    },
    {
      num: 11,
      projectName: 'angular10-lecture2-task11',
      links: ['https://xsltdev.ru/angular/tutorial/angular-cli/'],
    },
    {
      num: 12,
      projectName: 'angular10-lecture2-task12',
      links: ['http://blog.kislenko.net/show.php?id=2079'],
    },
    {
      num: 13,
      projectName: 'angular10-lecture2-task13',
      links: ['https://webdraftt.com/tutorial/angular-change-detection'],
    },
    {
      num: 14,
      links: [
        'https://www.youtube.com/embed/Rxj1jJswUfE',
        'https://xsltdev.ru/angular/tutorial/application-structure/',
        'https://xsltdev.ru/angular/cheatsheet/',
      ],
    },
    {
      num: 15,
      projectName: 'angular10-lecture2-task15',
      links: [
        'https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8',
      ],
    },
  ],
};

const homework3: Homework = {
  num: 3,
  tasks: [
    {
      num: 1,
      projectName: 'angular10-lecture3-task1',
      links: ['https://stepansuvorov.com/blog/2016/11/angular2-component-life-cycle/ ',
      'https://webdraftt.com/tutorial/component-lifecycle ',
      'https://xsltdev.ru/angular/tutorial/component-lifecycle/']
    },
    {
      num: 2,
      links: ['http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular ',
      'https://metanit.com/web/angular2/3.2.php']
    },
    { num: 3,
      links: ['http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular',
      'https://metanit.com/web/angular2/3.3.php']
    },
    {
      num: 4,
      projectName: 'angular10-lecture3-task4',
      links: ['https://metanit.com/web/angular2/2.9.php']
    },
    {
      num: 5,
      projectName: 'angular10-lecture3-task5',
      links: ['https://material.angular.io/guide/getting-started',
      'https://material.angular.io/components/categories',
      'https://www.youtube.com/embed/rTLwAwwFW0c']
    },
    {
      num: 6,
      projectName: 'angular10-lecture3-task6',
      links: ['https://ng-bootstrap.github.io/#/getting-started#installation',
      'https://ng-bootstrap.github.io/#/components/modal/examples',
      'https://www.youtube.com/embed/1O0oHzu6xYA']
    },
    {
      num: 7,
      projectName: 'angular10-lecture3-task7',
      links: ['https://material.angular.io/components/autocomplete/examples']
    },
    {
      num: 8,
      projectName: 'angular10-lecture3-task8',
    },
    {
      num: 9,
      projectName: 'angular10-lecture3-task9',
      links: ['https://github.com/text-mask/text-mask/tree/master/angular2/example']
    },
  ],
};

const homework4: Homework = {
  num: 4,
  tasks: [
    {
      num: 1,
      links: ['https://metanit.com/web/angular2/3.5.php',
              'http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D00%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular'
            ]
    },
    {
      num: 2,
      links: [
        'http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular',
        'https://metanit.com/web/angular2/3.6.php',
        'https://xsltdev.ru/angular/tutorial/custom-directives/',
        'https://webdraftt.com/tutorial/custom-directives'
      ]
    },
    {
      num: 3,
      projectName: 'angular10-lecture4-task3',
      links: [
        'http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular',
        'https://metanit.com/web/angular2/3.6.php'
      ]
    },
    {
      num: 4,
      links: [
        'http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular',
        'https://metanit.com/web/angular2/3.6.php'
      ]
    },
    {
      num: 5,
      projectName: 'angular10-lecture4-task5',
    },
    {
      num: 6,
      projectName: 'angular10-lecture4-task6',
    },
    {
      num: 7,
      projectName: 'angular10-lecture4-task7',
      links: [
        'http://coldfox.ru/article/5b28023900677f14ad353eec/%D0%94%D0%B8%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%B2-Angular',
        'https://metanit.com/web/angular2/3.6.php'
      ]
    },
  ],
};

const homework5: Homework = {
  num: 5,
  links: ['https://www.youtube.com/embed/esWI7GD72Ok',
          'https://xsltdev.ru/angular/tutorial/angular-services/',
          'https://xsltdev.ru/angular/tutorial/dependency-injection/',
          'https://angular-doc.ru/tutorial/toh-pt4',
          'https://angular.io/guide/dependency-injection-in-action',
          'https://angular.io/api/core/Host'
          ],
  tasks: [
    {
      num: 6,
      projectName: 'angular10-lecture5-task6',
      links: ['https://metaschool.ru/pub/games/bulls-and-cows/bulls.php',
              'https://www.youtube.com/embed/LaUY-qLQy1A',
              'https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D0%BA%D0%B8_%D0%B8_%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D1%8B'
            ]
    },
  ],
};

const homework6: Homework = {
  num: 6,
  tasks: [
    {
      num: 1,
      projectName: 'angular10-lecture6-task1',
      links: [
        'https://alytics.ru/blog/blog/7022/'
      ]
    },
  ],
};

const homework7: Homework = {
  num: 7,
  links: [
    'https://xsltdev.ru/angular/tutorial/angular-forms/',
    'https://xsltdev.ru/angular/tutorial/angular-reactive-forms/',
    'https://xsltdev.ru/angular/tutorial/forms-validation/'
  ],
  tasks: [
    {
      num: 1,
      projectName: 'angular10-lecture7-task1',
    },
  ],
};

const homework10: Homework = {
  num: 10,
  tasks: [
    {
      num: 1,
      projectName: 'angular10-lecture10-task1',
      links: [
        'https://jsonplaceholder.typicode.com/users',
        'https://material.angular.io/components/checkbox/overview',
        'https://jazzteam.org/ru/technical-articles/restful-services-manual/#:~:text=%D0%92%20REST%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%82%D1%81%D1%8F%204%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85,%E2%80%93%20update%2C%20DELETE%20%E2%80%93%20delete',
        'https://jsonplaceholder.typicode.com/',
        'https://stepansuvorov.com/blog/2017/10/%D0%9A%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80-angular/',
        'https://laptrinhx.com/angular-4-x-injector-4146149090/',
        'https://www.npmjs.com/package/google-maps',
        'https://www.youtube.com/embed/XgWRKT2SRac'
      ]
    },
    {
      num: 2,
      projectName: 'angular10-lecture10-task2',
    },
  ],
};

const homeworks: Homework[] = [
  homework1,
  homework2,
  homework3,
  homework4,
  homework5,
  homework6,
  homework7,
  homework10
];

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  githubPrefix = 'https://github.com/vzhukov85/';
  stackblitzPrefix = 'https://stackblitz.com/github/vzhukov85/';

  constructor() {
    this.processHomework();
  }

  processHomework(): void {
    homeworks.forEach((item) => {
      item.tasks.forEach((task) => {
        task.github = this.githubPrefix + task.projectName;
        task.stackblitz = this.stackblitzPrefix + task.projectName;
      });
    });
  }

  get homeworks(): Homework[] {
    return homeworks.map((homework) => {
      return {
        num: homework.num,
        links: homework.links,
        info: homework.info,
        tasks: homework.tasks.filter((task) => {
          if (!task.projectName) {
            return false;
          }
          return true;
        }),
      };
    });
  }

  get reference(): Homework[] {
    return homeworks.map((homework) => {
      return {
        num: homework.num,
        links: homework.links,
        info: homework.info,
        tasks: homework.tasks.filter((task) => {
          if (!task.links) {
            return false;
          }
          return true;
        }),
      };
    });
  }
}
