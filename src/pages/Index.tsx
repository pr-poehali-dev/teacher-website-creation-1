import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const teachers = [
  {
    id: 1,
    name: "Анна Сергеевна Иванова",
    subject: "Математика",
    experience: "15 лет",
    achievements: [
      "Лучший учитель года 2023",
      "Победитель олимпиады среди педагогов",
      "Автор методического пособия",
      "30+ учеников поступили в ВУЗы"
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Дмитрий Александрович Петров",
    subject: "Физика",
    experience: "12 лет",
    achievements: [
      "Кандидат физико-математических наук",
      "Руководитель научного кружка",
      "Победители всероссийских олимпиад",
      "Разработал авторскую программу"
    ],
    imageUrl: "https://cdn.poehali.dev/projects/d0c0bd81-492f-43c9-86b0-e9b8391280b1/files/fb220d4d-506b-4e10-ac22-4b8ac8b5fc86.jpg"
  },
  {
    id: 3,
    name: "Елена Викторовна Смирнова",
    subject: "Русский язык и литература",
    experience: "20 лет",
    achievements: [
      "Заслуженный учитель РФ",
      "Эксперт ЕГЭ",
      "Публикации в педагогических изданиях",
      "100% сдача ЕГЭ на 80+ баллов"
    ],
    imageUrl: "https://cdn.poehali.dev/projects/d0c0bd81-492f-43c9-86b0-e9b8391280b1/files/e97a43fa-6d99-42d2-9aea-dec43a2584a6.jpg"
  },
  {
    id: 4,
    name: "Михаил Игоревич Козлов",
    subject: "Информатика",
    experience: "8 лет",
    achievements: [
      "Призёр хакатонов",
      "Ментор олимпиад по программированию",
      "Создатель образовательного YouTube-канала",
      "Победители международных соревнований"
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Ольга Николаевна Федорова",
    subject: "Английский язык",
    experience: "18 лет",
    achievements: [
      "Сертификат CELTA",
      "Стажировки в Великобритании и США",
      "Организатор языковых клубов",
      "Подготовка к международным экзаменам"
    ],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Сергей Владимирович Морозов",
    subject: "История",
    experience: "14 лет",
    achievements: [
      "Кандидат исторических наук",
      "Автор исследовательских работ",
      "Руководитель школьного музея",
      "Участие в археологических экспедициях"
    ],
    imageUrl: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Наши учителя —<br />наша гордость
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Познакомьтесь с командой профессионалов, которые вдохновляют и развивают будущее поколение
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card 
              key={teacher.id} 
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 h-64">
                <img 
                  src={teacher.imageUrl} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white font-semibold shadow-lg">
                    {teacher.experience}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-lg text-muted-foreground font-semibold flex items-center gap-2">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                    {teacher.subject}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    Достижения
                  </h4>
                  <ul className="space-y-2">
                    {teacher.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Heart" size={48} className="text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Каждый учитель — это призвание
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Наша команда постоянно развивается, участвует в конференциях и делится опытом, 
            чтобы дать ученикам самое лучшее образование
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;