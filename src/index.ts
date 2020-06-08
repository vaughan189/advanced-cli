import 'reflect-metadata';
import { Container } from 'inversify';
import { CLI } from './cli';
import { FeatureRequest } from './templates/github/feature-request.template';
import { DefaultTemplate } from './templates/default.template';
import { MergeRequest } from './templates/gitlab/merge-request.template';

export function index(): CLI {
    const container: Container = new Container();

    container.bind<DefaultTemplate>('DefaultTemplate').to(DefaultTemplate).inSingletonScope();
    container.bind<FeatureRequest>('FeatureRequest').to(FeatureRequest).inSingletonScope();
    container.bind<MergeRequest>('MergeRequest').to(MergeRequest).inSingletonScope();
    container.bind<CLI>('CLI').to(CLI).inSingletonScope();

    return container.get<CLI>('CLI');
};

index();