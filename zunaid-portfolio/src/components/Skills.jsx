import './Skills.css'
import SectionHeader from './SectionHeader'
import { skillCards, techIcons, tools } from '../data'

const bgCode = `$sql = "SELECT * FROM orders WHERE status = 'pending'";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['table_no'];
}

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    MaxPooling2D(2, 2),
    Flatten(),
    Dense(8, activation='softmax')
])
model.fit(train_data, epochs=20, validation_data=val_data)

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    cart.push(item);
    updateTotal();
});

df = pd.merge(demand, weather, on='date')
df['temp_avg'] = df[['T2M_MAX', 'T2M_MIN']].mean(axis=1)`

function Skills() {
  return (
    <section className="skills" id="skills">
      <pre className="code-bg" aria-hidden="true">
        {bgCode}
      </pre>

      <div className="container skills-inner">
        <span className="big-code">&lt;/&gt;</span>

        <SectionHeader
          title="Skills"
          subtitle="I am striving to never stop learning and improving"
        />

        <div className="skill-cards">
          {skillCards.map((card) => {
            const Icon = card.icon
            return (
              <div className="skill-card" key={card.title}>
                <Icon />
                <h3>{card.title}</h3>
                <p>{card.tags}</p>
              </div>
            )
          })}
        </div>

        <div className="tech-icons">
          {techIcons.map((tech) => {
            const Icon = tech.icon
            return (
              <div className="tech" key={tech.name}>
                <div className="tech-circle" style={{ background: tech.color }}>
                  <Icon />
                </div>
                <span style={{ color: tech.color }}>{tech.name}</span>
              </div>
            )
          })}
        </div>

        <p className="tools">
          Tools I use: <span>{tools.join('  ·  ')}</span>
        </p>
      </div>
    </section>
  )
}

export default Skills
