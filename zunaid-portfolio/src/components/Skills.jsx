import './Skills.css'
import SectionHeader from './SectionHeader'
import { skillCards, techIcons, tools } from '../data'

// Code used for the faded editor background, split into columns
const codeColumns = [
  `        'merge'   => $data['sort_order'],
        );                $data['error'];
    }
}

$sort_order = array();

foreach ($quotes as $key => $value) {
    $sort_order[$key] = $value['sort_order'];
}

array_multisort($sort_order, SORT_ASC, $quotes);

$this->session->data['shipping_methods'] = $quotes;
$this->session->data['address'] = $address;

if (empty($quotes)) {
    $json['error'] = $this->language->get(
        'error_no_shipping_methods');
} else {
    $json['quotes'] = $quotes;
}

if (isset($this->session->data['shipping_method']) &&
    !empty($this->session->data['shipping_method']) &&
    isset($this->session->data['shipping_method']['code'])
    ) {
    $json['selected'] = $this->session->data[
        'shipping_method']['code'];
} else {
    $json['selected'] = '';
}
} else {
    $json['error'] = $this->language->get('error_shipping');
}

$sql = "SELECT * FROM orders WHERE status = 'pending'";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo $row['table_no'];
}

$this->response->addHeader('Content-Type: application/json');
$this->response->setOutput(json_encode($json));`,
  `this.$element.find('.item')
  .one('bsTransitionEnd', function () {
    this.$items.eq(pos)
  })
this.cycle(true)

if (this.interval) clearInterval(this.interval)

this.interval = setInterval($.proxy(this.next, this))

Carousel.prototype.next = function () {
  if (this.sliding) return
  return this.slide('next')
}

Carousel.prototype.prev = function () {
  if (this.sliding) return
  return this.slide('prev')
}

Carousel.prototype.slide = function (type, next) {
  var $active   = this.$element.find('.item.active')
  var $next     = next || this.getItemForDirection(type, $active)
  var isCycling = this.interval
  var direction = type == 'next' ? 'left' : 'right'
  var that      = this

  if ($next.hasClass('active')) return (this.sliding = false)

  var relatedTarget = $next[0]
  var slideEvent = $.Event('slide.bs.carousel', {
    relatedTarget: relatedTarget,
    direction: direction
  })
  this.$element.trigger(slideEvent)
  if (slideEvent.isDefaultPrevented()) return

  this.sliding = true
  isCycling && this.pause()
}`,
  `model = Sequential([
    Conv2D(32, (3, 3), activation='relu',
           input_shape=(224, 224, 3)),
    MaxPooling2D(2, 2),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(2, 2),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(8, activation='softmax')
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_data, epochs=20,
          validation_data=val_data)

df = pd.merge(demand, weather, on='date')
df['temp_avg'] = df[['T2M_MAX', 'T2M_MIN']]
                   .mean(axis=1)

const menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
  cart.push(item)
  updateTotal()
})`,
]

function CodeColumn({ code, numbered }) {
  const lines = code.split('\n')
  return (
    <pre className={numbered ? 'code-col numbered' : 'code-col'}>
      {lines.map((line, i) => (
        <span key={i}>
          {numbered && <i>{i + 37}</i>}
          {line || ' '}
          {'\n'}
        </span>
      ))}
    </pre>
  )
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="code-bg" aria-hidden="true">
        <CodeColumn code={codeColumns[0]} />
        <CodeColumn code={codeColumns[1]} numbered />
        <CodeColumn code={codeColumns[2]} numbered />
      </div>

      <div className="container skills-inner">
        <span className="big-code" aria-hidden="true">
          &lt;/&gt;
        </span>

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
