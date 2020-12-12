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

const homeworks: Homework[] = [homework1, homework2];

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
