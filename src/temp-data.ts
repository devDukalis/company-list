import { Company } from "@/models";

export const companiesInitialData: Company[] = [
  {
    id: "1",
    title: "Озон",
    address: "123112, г.Москва, наб. Пресненская, д. 10",
    staff: [
      {
        id: "10",
        companyId: "1",
        lastName: "Петров",
        firstName: "Иван",
        employment: "Главный бухгалтер",
      },
      {
        id: "20",
        companyId: "1",
        lastName: "Сидоров",
        firstName: "Максим",
        employment: "Директор",
      },
      {
        id: "30",
        companyId: "1",
        lastName: "Иванов",
        firstName: "Виктор",
        employment: "Младший менеджер",
      },
      {
        id: "40",
        companyId: "1",
        lastName: "Кудров",
        firstName: "Сергей",
        employment: "Заместитель главного инженера",
      },
    ],
  },
  {
    id: "2",
    title: "Авито",
    address: "Лесная ул., 7, Москва (этаж 2,5,10, 13-15)",
    staff: [
      {
        id: "50",
        companyId: "2",
        lastName: "Суворова",
        firstName: "Анна",
        employment: "Техник по метрологии",
      },
      {
        id: "60",
        companyId: "2",
        lastName: "Сафонов",
        firstName: "Егор",
        employment: "Товаровед",
      },
      {
        id: "70",
        companyId: "2",
        lastName: "Волкова",
        firstName: "Алиса",
        employment: "Физиолог",
      },
    ],
  },
  {
    id: "3",
    title: "С100",
    address: "640000, Курганская область, Курган г., Тобольная ул., д.58",
    staff: [
      {
        id: "80",
        companyId: "3",
        lastName: "Филиппова",
        firstName: "Алиса",
        employment: "Юрист",
      },
    ],
  },
  {
    id: "4",
    title: "ЕРАМ",
    address: "125040, город Москва, ул. Башиловка Н., д. 12",
    staff: [
      {
        id: "90",
        companyId: "4",
        lastName: "Рудаков",
        firstName: "Михаил",
        employment: "Диспетчер",
      },
      {
        id: "100",
        companyId: "4",
        lastName: "Зайцев",
        firstName: "Богдан",
        employment: "Секретарь отдела",
      },
      {
        id: "110",
        companyId: "4",
        lastName: "Куликов",
        firstName: "Даниил",
        employment: "Лаборант",
      },
      {
        id: "120",
        companyId: "4",
        lastName: "Лебедев",
        firstName: "Илья",
        employment: "Начальник отдела ИТ",
      },
    ],
  },
  {
    id: "5",
    title: "Mail",
    address: "Барабанный пер., 3, Москва",
    staff: [
      {
        id: "130",
        companyId: "5",
        lastName: "Воронов",
        firstName: "Марк",
        employment: "Старший программист",
      },
    ],
  },
  {
    id: "6",
    title: "Microsoft",
    address: "г. Москва, ул. Крылатская, д. 17, к. 1",
    staff: [],
  },
  {
    id: "7",
    title: "Wargaming",
    address: "г. Москва ул. щипок д. 5 этаж 3 ПОМЕЩ. I КОМ. 1, 1А,1Б, 1В, 1Г, 1Д, 1Е, 2-5",
    staff: [
      {
        id: "140",
        companyId: "11",
        lastName: "Соколов",
        firstName: "Михаил",
        employment: "Программист",
      },
    ],
  },
  {
    id: "8",
    title: "Wildberries ",
    address:
      "	142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1",
    staff: [],
  },
  {
    id: "9",
    title: "1С-Битрикс",
    address: "109544, г. Москва, б-р Энтузиастов, д. 2, эт 13, ПОМЕЩЕНИЯ 8-19",
    staff: [],
  },
  {
    id: "10",
    title: "МТС",
    address: "109147, г. Москва, ул. Марксистская, Д.4",
    staff: [],
  },
];
