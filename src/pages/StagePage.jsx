import { Link } from 'react-router-dom';
import { STAGES, getStage } from '../content/stages';
import { STAGE_PAGES } from '../content/stagePages';
import {
  PageHero,
  Sec,
  Head,
  Steps,
  Bento,
  Surface,
  PrevNext,
  ClosingCta,
  Tag,
  Button,
  statusLabel,
} from '../components/sections/PageKit';

export default function StagePage({ id }) {
  const stage = getStage(id);
  const page = STAGE_PAGES[id];
  const i = STAGES.findIndex((s) => s.id === id);

  return (
    <>
      <PageHero
        hue={stage.hue}
        eyebrow={`${stage.num} — ${stage.name.toUpperCase()}`}
        tag={<Tag status={stage.status} label={statusLabel(stage)} />}
        title={page.title}
        lede={page.lede}
        foot={page.foot}
        actions={
          <>
            <Button as={Link} to={page.cta.to}>
              {page.cta.label}
            </Button>
            <Button as={Link} to="/platform" variant="glass">
              See the whole engine
            </Button>
          </>
        }
        aside={<Surface {...page.surface} />}
      />

      <Sec hue={stage.hue}>
        <Head {...page.stepsHead} />
        <Steps items={page.steps} />
      </Sec>

      <Sec tint hue={stage.hue}>
        <Head {...page.featHead} />
        <Bento items={page.features} />
      </Sec>

      <Sec hue={stage.hue}>
        <PrevNext prev={STAGES[i - 1]} next={STAGES[i + 1]} />
      </Sec>

      <ClosingCta
        title="Start where it already works."
        body="Campaigns and contacts are live and free to try. The rest of the engine switches on as it ships — no new contract, no migration."
        primary={{ to: '/pricing', label: 'Start free' }}
        secondary={{ to: '/roadmap', label: 'See the roadmap' }}
        foot="No credit card · Import your list in one click"
      />
    </>
  );
}
