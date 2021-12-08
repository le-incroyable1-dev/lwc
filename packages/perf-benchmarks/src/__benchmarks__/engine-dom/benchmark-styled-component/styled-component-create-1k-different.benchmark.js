/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import components from 'perf-benchmarks-components/dist/dom/benchmark/shadow/styledComponents.js';
import { styledComponentBenchmark } from '../../../utils/styledComponentBenchmark';

const NUM_COMPONENTS = 1000;

// Create 1k components with different CSS in each component
styledComponentBenchmark(
    `benchmark-styled-component/create/1k/different`,
    NUM_COMPONENTS,
    components
);
