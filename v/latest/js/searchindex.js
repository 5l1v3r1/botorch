Search.setIndex({docnames:["acquisition","cross_validation","exceptions","fit","gen","index","models","optim","posteriors","sampling","settings","test_functions","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["acquisition.rst","cross_validation.rst","exceptions.rst","fit.rst","gen.rst","index.rst","models.rst","optim.rst","posteriors.rst","sampling.rst","settings.rst","test_functions.rst","utils.rst"],objects:{"botorch.acquisition":{acquisition:[0,0,0,"-"],analytic:[0,0,0,"-"],cost_aware:[0,0,0,"-"],fixed_feature:[0,0,0,"-"],knowledge_gradient:[0,0,0,"-"],max_value_entropy_search:[0,0,0,"-"],monte_carlo:[0,0,0,"-"],objective:[0,0,0,"-"],utils:[0,0,0,"-"]},"botorch.acquisition.acquisition":{AcquisitionFunction:[0,1,1,""],OneShotAcquisitionFunction:[0,1,1,""]},"botorch.acquisition.acquisition.AcquisitionFunction":{forward:[0,2,1,""],set_X_pending:[0,2,1,""]},"botorch.acquisition.acquisition.OneShotAcquisitionFunction":{extract_candidates:[0,2,1,""],get_augmented_q_batch_size:[0,2,1,""]},"botorch.acquisition.analytic":{AnalyticAcquisitionFunction:[0,1,1,""],ConstrainedExpectedImprovement:[0,1,1,""],ExpectedImprovement:[0,1,1,""],NoisyExpectedImprovement:[0,1,1,""],PosteriorMean:[0,1,1,""],ProbabilityOfImprovement:[0,1,1,""],UpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.analytic.AnalyticAcquisitionFunction":{set_X_pending:[0,2,1,""]},"botorch.acquisition.analytic.ConstrainedExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.NoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.PosteriorMean":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.UpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.cost_aware":{CostAwareUtility:[0,1,1,""],GenericCostAwareUtility:[0,1,1,""],InverseCostWeightedUtility:[0,1,1,""]},"botorch.acquisition.cost_aware.CostAwareUtility":{forward:[0,2,1,""]},"botorch.acquisition.cost_aware.GenericCostAwareUtility":{forward:[0,2,1,""]},"botorch.acquisition.cost_aware.InverseCostWeightedUtility":{forward:[0,2,1,""]},"botorch.acquisition.fixed_feature":{FixedFeatureAcquisitionFunction:[0,1,1,""]},"botorch.acquisition.fixed_feature.FixedFeatureAcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.knowledge_gradient":{qKnowledgeGradient:[0,1,1,""],qMultiFidelityKnowledgeGradient:[0,1,1,""]},"botorch.acquisition.knowledge_gradient.qKnowledgeGradient":{extract_candidates:[0,2,1,""],forward:[0,2,1,""],get_augmented_q_batch_size:[0,2,1,""]},"botorch.acquisition.knowledge_gradient.qMultiFidelityKnowledgeGradient":{cost_sampler:[0,2,1,""],forward:[0,2,1,""]},"botorch.acquisition.max_value_entropy_search":{qMaxValueEntropy:[0,1,1,""],qMultiFidelityMaxValueEntropy:[0,1,1,""]},"botorch.acquisition.max_value_entropy_search.qMaxValueEntropy":{forward:[0,2,1,""],set_X_pending:[0,2,1,""]},"botorch.acquisition.max_value_entropy_search.qMultiFidelityMaxValueEntropy":{cost_sampler:[0,2,1,""],forward:[0,2,1,""]},"botorch.acquisition.monte_carlo":{MCAcquisitionFunction:[0,1,1,""],qExpectedImprovement:[0,1,1,""],qNoisyExpectedImprovement:[0,1,1,""],qProbabilityOfImprovement:[0,1,1,""],qSimpleRegret:[0,1,1,""],qUpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.monte_carlo.MCAcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qNoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qSimpleRegret":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qUpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.objective":{AcquisitionObjective:[0,1,1,""],ConstrainedMCObjective:[0,1,1,""],GenericMCObjective:[0,1,1,""],IdentityMCObjective:[0,1,1,""],LinearMCObjective:[0,1,1,""],MCAcquisitionObjective:[0,1,1,""],ScalarizedObjective:[0,1,1,""]},"botorch.acquisition.objective.ConstrainedMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.GenericMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.IdentityMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.LinearMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.MCAcquisitionObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.ScalarizedObjective":{forward:[0,2,1,""]},"botorch.acquisition.utils":{expand_trace_observations:[0,3,1,""],get_acquisition_function:[0,3,1,""],get_infeasible_cost:[0,3,1,""],is_nonnegative:[0,3,1,""],project_to_target_fidelity:[0,3,1,""],prune_inferior_points:[0,3,1,""]},"botorch.cross_validation":{CVFolds:[1,1,1,""],CVResults:[1,1,1,""],batch_cross_validation:[1,3,1,""],gen_loo_cv_folds:[1,3,1,""]},"botorch.cross_validation.CVFolds":{test_X:[1,2,1,""],test_Y:[1,2,1,""],test_Yvar:[1,2,1,""],train_X:[1,2,1,""],train_Y:[1,2,1,""],train_Yvar:[1,2,1,""]},"botorch.cross_validation.CVResults":{model:[1,2,1,""],observed_Y:[1,2,1,""],observed_Yvar:[1,2,1,""],posterior:[1,2,1,""]},"botorch.exceptions":{errors:[2,0,0,"-"],warnings:[2,0,0,"-"]},"botorch.exceptions.errors":{BotorchError:[2,4,1,""],BotorchTensorDimensionError:[2,4,1,""],CandidateGenerationError:[2,4,1,""],InputDataError:[2,4,1,""],UnsupportedError:[2,4,1,""]},"botorch.exceptions.warnings":{BadInitialCandidatesWarning:[2,4,1,""],BotorchTensorDimensionWarning:[2,4,1,""],BotorchWarning:[2,4,1,""],CostAwareWarning:[2,4,1,""],InputDataWarning:[2,4,1,""],OptimizationWarning:[2,4,1,""],SamplingWarning:[2,4,1,""]},"botorch.fit":{fit_gpytorch_model:[3,3,1,""]},"botorch.gen":{gen_candidates_scipy:[4,3,1,""],gen_candidates_torch:[4,3,1,""],get_best_candidates:[4,3,1,""]},"botorch.models":{converter:[6,0,0,"-"],cost:[6,0,0,"-"],deterministic:[6,0,0,"-"],gp_regression:[6,0,0,"-"],gp_regression_fidelity:[6,0,0,"-"],gpytorch:[6,0,0,"-"],model:[6,0,0,"-"],model_list_gp_regression:[6,0,0,"-"],multitask:[6,0,0,"-"],utils:[6,0,0,"-"]},"botorch.models.converter":{batched_to_model_list:[6,3,1,""],model_list_to_batched:[6,3,1,""]},"botorch.models.cost":{AffineFidelityCostModel:[6,1,1,""]},"botorch.models.cost.AffineFidelityCostModel":{forward:[6,2,1,""]},"botorch.models.deterministic":{AffineDeterministicModel:[6,1,1,""],DeterministicModel:[6,1,1,""],GenericDeterministicModel:[6,1,1,""]},"botorch.models.deterministic.AffineDeterministicModel":{forward:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.deterministic.DeterministicModel":{forward:[6,2,1,""],num_outputs:[6,2,1,""],posterior:[6,2,1,""]},"botorch.models.deterministic.GenericDeterministicModel":{forward:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.gp_regression":{FixedNoiseGP:[6,1,1,""],HeteroskedasticSingleTaskGP:[6,1,1,""],SingleTaskGP:[6,1,1,""]},"botorch.models.gp_regression.FixedNoiseGP":{fantasize:[6,2,1,""],forward:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.gp_regression.HeteroskedasticSingleTaskGP":{condition_on_observations:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.gp_regression.SingleTaskGP":{forward:[6,2,1,""]},"botorch.models.gp_regression_fidelity":{SingleTaskMultiFidelityGP:[6,1,1,""]},"botorch.models.gpytorch":{BatchedMultiOutputGPyTorchModel:[6,1,1,""],GPyTorchModel:[6,1,1,""],ModelListGPyTorchModel:[6,1,1,""],MultiTaskGPyTorchModel:[6,1,1,""]},"botorch.models.gpytorch.BatchedMultiOutputGPyTorchModel":{condition_on_observations:[6,2,1,""],get_batch_dimensions:[6,2,1,""],posterior:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.gpytorch.GPyTorchModel":{condition_on_observations:[6,2,1,""],num_outputs:[6,2,1,""],posterior:[6,2,1,""]},"botorch.models.gpytorch.ModelListGPyTorchModel":{condition_on_observations:[6,2,1,""],posterior:[6,2,1,""]},"botorch.models.gpytorch.MultiTaskGPyTorchModel":{posterior:[6,2,1,""]},"botorch.models.kernels":{downsampling:[6,0,0,"-"],exponential_decay:[6,0,0,"-"],linear_truncated_fidelity:[6,0,0,"-"]},"botorch.models.kernels.downsampling":{DownsamplingKernel:[6,1,1,""]},"botorch.models.kernels.exponential_decay":{ExponentialDecayKernel:[6,1,1,""]},"botorch.models.kernels.linear_truncated_fidelity":{LinearTruncatedFidelityKernel:[6,1,1,""]},"botorch.models.model":{Model:[6,1,1,""]},"botorch.models.model.Model":{condition_on_observations:[6,2,1,""],fantasize:[6,2,1,""],num_outputs:[6,2,1,""],posterior:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.model_list_gp_regression":{ModelListGP:[6,1,1,""]},"botorch.models.model_list_gp_regression.ModelListGP":{condition_on_observations:[6,2,1,""],subset_output:[6,2,1,""]},"botorch.models.multitask":{FixedNoiseMultiTaskGP:[6,1,1,""],MultiTaskGP:[6,1,1,""]},"botorch.models.multitask.MultiTaskGP":{forward:[6,2,1,""]},"botorch.models.transforms":{input:[6,0,0,"-"],outcome:[6,0,0,"-"],utils:[6,0,0,"-"]},"botorch.models.transforms.input":{ChainedInputTransform:[6,1,1,""],InputTransform:[6,1,1,""],Normalize:[6,1,1,""]},"botorch.models.transforms.input.ChainedInputTransform":{forward:[6,2,1,""],untransform:[6,2,1,""]},"botorch.models.transforms.input.InputTransform":{forward:[6,2,1,""],untransform:[6,2,1,""]},"botorch.models.transforms.input.Normalize":{bounds:[6,2,1,""],forward:[6,2,1,""],untransform:[6,2,1,""]},"botorch.models.transforms.outcome":{ChainedOutcomeTransform:[6,1,1,""],Log:[6,1,1,""],OutcomeTransform:[6,1,1,""],Standardize:[6,1,1,""]},"botorch.models.transforms.outcome.ChainedOutcomeTransform":{forward:[6,2,1,""],untransform:[6,2,1,""],untransform_posterior:[6,2,1,""]},"botorch.models.transforms.outcome.Log":{forward:[6,2,1,""],untransform:[6,2,1,""],untransform_posterior:[6,2,1,""]},"botorch.models.transforms.outcome.OutcomeTransform":{forward:[6,2,1,""],untransform:[6,2,1,""],untransform_posterior:[6,2,1,""]},"botorch.models.transforms.outcome.Standardize":{forward:[6,2,1,""],untransform:[6,2,1,""],untransform_posterior:[6,2,1,""]},"botorch.models.transforms.utils":{lognorm_to_norm:[6,3,1,""],norm_to_lognorm:[6,3,1,""],norm_to_lognorm_mean:[6,3,1,""],norm_to_lognorm_variance:[6,3,1,""]},"botorch.models.utils":{add_output_dim:[6,3,1,""],check_min_max_scaling:[6,3,1,""],check_no_nans:[6,3,1,""],check_standardization:[6,3,1,""],mod_batch_shape:[6,3,1,""],multioutput_to_batch_mode_transform:[6,3,1,""],validate_input_scaling:[6,3,1,""]},"botorch.optim":{fit:[7,0,0,"-"],initializers:[7,0,0,"-"],numpy_converter:[7,0,0,"-"],optimize:[7,0,0,"-"],parameter_constraints:[7,0,0,"-"],utils:[7,0,0,"-"]},"botorch.optim.fit":{fit_gpytorch_scipy:[7,3,1,""],fit_gpytorch_torch:[7,3,1,""]},"botorch.optim.initializers":{gen_batch_initial_conditions:[7,3,1,""],gen_one_shot_kg_initial_conditions:[7,3,1,""],initialize_q_batch:[7,3,1,""],initialize_q_batch_nonneg:[7,3,1,""]},"botorch.optim.numpy_converter":{TorchAttr:[7,1,1,""],module_to_array:[7,3,1,""],set_params_with_array:[7,3,1,""]},"botorch.optim.numpy_converter.TorchAttr":{device:[7,2,1,""],dtype:[7,2,1,""],shape:[7,2,1,""]},"botorch.optim.optimize":{optimize_acqf:[7,3,1,""],optimize_acqf_cyclic:[7,3,1,""]},"botorch.optim.parameter_constraints":{eval_lin_constraint:[7,3,1,""],lin_constraint_jac:[7,3,1,""],make_scipy_bounds:[7,3,1,""],make_scipy_linear_constraints:[7,3,1,""]},"botorch.optim.utils":{ConvergenceCriterion:[7,1,1,""],columnwise_clamp:[7,3,1,""],fix_features:[7,3,1,""],sample_all_priors:[7,3,1,""]},"botorch.optim.utils.ConvergenceCriterion":{evaluate:[7,2,1,""]},"botorch.posteriors":{deterministic:[8,0,0,"-"],gpytorch:[8,0,0,"-"],posterior:[8,0,0,"-"],transformed:[8,0,0,"-"]},"botorch.posteriors.deterministic":{DeterministicPosterior:[8,1,1,""]},"botorch.posteriors.deterministic.DeterministicPosterior":{device:[8,2,1,""],dtype:[8,2,1,""],event_shape:[8,2,1,""],mean:[8,2,1,""],rsample:[8,2,1,""],variance:[8,2,1,""]},"botorch.posteriors.gpytorch":{GPyTorchPosterior:[8,1,1,""],scalarize_posterior:[8,3,1,""]},"botorch.posteriors.gpytorch.GPyTorchPosterior":{device:[8,2,1,""],dtype:[8,2,1,""],event_shape:[8,2,1,""],mean:[8,2,1,""],rsample:[8,2,1,""],variance:[8,2,1,""]},"botorch.posteriors.posterior":{Posterior:[8,1,1,""]},"botorch.posteriors.posterior.Posterior":{device:[8,2,1,""],dtype:[8,2,1,""],event_shape:[8,2,1,""],mean:[8,2,1,""],rsample:[8,2,1,""],sample:[8,2,1,""],variance:[8,2,1,""]},"botorch.posteriors.transformed":{TransformedPosterior:[8,1,1,""]},"botorch.posteriors.transformed.TransformedPosterior":{device:[8,2,1,""],dtype:[8,2,1,""],event_shape:[8,2,1,""],mean:[8,2,1,""],rsample:[8,2,1,""],variance:[8,2,1,""]},"botorch.sampling":{qmc:[9,0,0,"-"],samplers:[9,0,0,"-"]},"botorch.sampling.qmc":{MultivariateNormalQMCEngine:[9,1,1,""],NormalQMCEngine:[9,1,1,""]},"botorch.sampling.qmc.MultivariateNormalQMCEngine":{draw:[9,2,1,""]},"botorch.sampling.qmc.NormalQMCEngine":{draw:[9,2,1,""]},"botorch.sampling.samplers":{IIDNormalSampler:[9,1,1,""],MCSampler:[9,1,1,""],SobolQMCNormalSampler:[9,1,1,""]},"botorch.sampling.samplers.MCSampler":{collapse_batch_dims:[9,5,1,""],forward:[9,2,1,""],resample:[9,5,1,""],sample_shape:[9,5,1,""]},"botorch.settings":{debug:[10,1,1,""],propagate_grads:[10,1,1,""],suppress_botorch_warnings:[10,3,1,""],validate_input_scaling:[10,1,1,""]},"botorch.test_functions":{multi_fidelity:[11,0,0,"-"],synthetic:[11,0,0,"-"]},"botorch.test_functions.multi_fidelity":{AugmentedBranin:[11,1,1,""],AugmentedHartmann:[11,1,1,""],AugmentedRosenbrock:[11,1,1,""]},"botorch.test_functions.multi_fidelity.AugmentedBranin":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.multi_fidelity.AugmentedHartmann":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.multi_fidelity.AugmentedRosenbrock":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic":{Ackley:[11,1,1,""],Beale:[11,1,1,""],Branin:[11,1,1,""],Bukin:[11,1,1,""],Cosine8:[11,1,1,""],DixonPrice:[11,1,1,""],DropWave:[11,1,1,""],EggHolder:[11,1,1,""],Griewank:[11,1,1,""],Hartmann:[11,1,1,""],HolderTable:[11,1,1,""],Levy:[11,1,1,""],Michalewicz:[11,1,1,""],Powell:[11,1,1,""],Rastrigin:[11,1,1,""],Rosenbrock:[11,1,1,""],Shekel:[11,1,1,""],SixHumpCamel:[11,1,1,""],StyblinskiTang:[11,1,1,""],SyntheticTestFunction:[11,1,1,""],ThreeHumpCamel:[11,1,1,""]},"botorch.test_functions.synthetic.Ackley":{evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Beale":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Branin":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Bukin":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Cosine8":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.DixonPrice":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.DropWave":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.EggHolder":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Griewank":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Hartmann":{dim:[11,5,1,""],evaluate_true:[11,2,1,""],optimal_value:[11,2,1,""],optimizers:[11,2,1,""]},"botorch.test_functions.synthetic.HolderTable":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Levy":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Michalewicz":{dim:[11,5,1,""],evaluate_true:[11,2,1,""],optimizers:[11,2,1,""]},"botorch.test_functions.synthetic.Powell":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Rastrigin":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Rosenbrock":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.Shekel":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.SixHumpCamel":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.StyblinskiTang":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.test_functions.synthetic.SyntheticTestFunction":{dim:[11,5,1,""],evaluate_true:[11,2,1,""],forward:[11,2,1,""],optimal_value:[11,2,1,""]},"botorch.test_functions.synthetic.ThreeHumpCamel":{dim:[11,5,1,""],evaluate_true:[11,2,1,""]},"botorch.utils":{constraints:[12,0,0,"-"],objective:[12,0,0,"-"],sampling:[12,0,0,"-"],testing:[12,0,0,"-"],transforms:[12,0,0,"-"]},"botorch.utils.constraints":{get_outcome_constraint_transforms:[12,3,1,""]},"botorch.utils.objective":{apply_constraints:[12,3,1,""],apply_constraints_nonnegative_soft:[12,3,1,""],get_objective_weights_transform:[12,3,1,""],soft_eval_constraint:[12,3,1,""]},"botorch.utils.sampling":{construct_base_samples:[12,3,1,""],construct_base_samples_from_posterior:[12,3,1,""],draw_sobol_normal_samples:[12,3,1,""],draw_sobol_samples:[12,3,1,""],manual_seed:[12,3,1,""]},"botorch.utils.testing":{BotorchTestCase:[12,1,1,""],MockAcquisitionFunction:[12,1,1,""],MockModel:[12,1,1,""],MockPosterior:[12,1,1,""],SyntheticTestFunctionBaseTestCase:[12,1,1,""]},"botorch.utils.testing.BotorchTestCase":{device:[12,5,1,""],setUp:[12,2,1,""]},"botorch.utils.testing.MockAcquisitionFunction":{set_X_pending:[12,2,1,""]},"botorch.utils.testing.MockModel":{load_state_dict:[12,2,1,""],num_outputs:[12,2,1,""],posterior:[12,2,1,""],state_dict:[12,2,1,""]},"botorch.utils.testing.MockPosterior":{device:[12,2,1,""],dtype:[12,2,1,""],event_shape:[12,2,1,""],mean:[12,2,1,""],rsample:[12,2,1,""],variance:[12,2,1,""]},"botorch.utils.testing.SyntheticTestFunctionBaseTestCase":{functions:[12,5,1,""],test_forward:[12,2,1,""],test_optimal_value:[12,2,1,""],test_optimizer:[12,2,1,""]},"botorch.utils.transforms":{concatenate_pending_points:[12,3,1,""],convert_to_target_pre_hook:[12,3,1,""],gpt_posterior_settings:[12,3,1,""],match_batch_shape:[12,3,1,""],normalize:[12,3,1,""],normalize_indices:[12,3,1,""],squeeze_last_dim:[12,3,1,""],standardize:[12,3,1,""],t_batch_mode_transform:[12,3,1,""],unnormalize:[12,3,1,""]},botorch:{acquisition:[0,0,0,"-"],cross_validation:[1,0,0,"-"],exceptions:[2,0,0,"-"],fit:[3,0,0,"-"],gen:[4,0,0,"-"],models:[6,0,0,"-"],optim:[7,0,0,"-"],posteriors:[8,0,0,"-"],sampling:[9,0,0,"-"],settings:[10,0,0,"-"],test_functions:[11,0,0,"-"],utils:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute"},terms:{"01968v3":0,"08275v1":0,"0th":0,"1st":0,"220446049250313e":7,"3pi":11,"abstract":[9,11],"boolean":[7,10],"case":[0,8,12],"class":[0,1,4,6,7,8,9,10,11,12],"default":[0,3,4,6,7,9,12],"final":0,"float":[0,4,6,7,8,11,12],"function":[1,3,4,6,12],"int":[0,4,6,7,9,11,12],"long":[6,7],"new":[1,3,6,7],"return":[0,1,3,4,6,7,8,9,10,11,12],"static":6,"true":[0,4,6,7,9,10,11,12],"var":[6,10],"while":6,For:[0,6,7,8,12],GPs:[1,6],MES:0,One:6,That:0,The:[3,4,6,7,8,9,11,12],Then:0,These:[0,7],Use:6,Used:[6,8],Useful:6,Uses:0,__call__:[0,9],_construct_base_sampl:9,_construct_x_ful:0,_flag:10,_sampl:12,_scipy_objective_and_grad:7,a_1j:11,a_ij:11,abc:[0,6,8,9,11],abl:0,about:0,access:6,accord:7,accordingli:7,account:0,accur:0,accuraci:7,acklei:11,acq_funct:[0,7],acq_valu:7,acq_value_list:7,acqf:0,acquisit:[2,4,5,6,9,12],acquisition_funct:4,acquisition_function_nam:0,acquisitionfunct:[0,7],acquisitionobject:0,acquisiton:7,acquist:7,across:[0,6,7,9,12],active_dim:6,actual:0,adam:[4,7],add:[6,7,11,12],add_output_dim:6,added:[0,6],adding:0,addit:[0,7],addition:7,additon:0,affect:10,affin:[0,6,8],affinedeterministicmodel:6,affinefidelitycostmodel:6,after:[6,7],afterward:6,again:6,algorithm:[7,9],alia:[1,7],all:[0,4,6,7,8,11,12],allow:[0,6,12],almost:0,along:[1,3,6,7],alpha:[6,7],alpha_1:11,alpha_i:11,alreadi:[0,7],also:[0,6,7,12],although:6,alwai:[0,6],analyticacquisitionfunct:0,ani:[1,3,4,6,7,12],anoth:[6,12],appear:7,appendix:0,appli:[0,6,7,8,12],applic:[6,9],apply_constraint:[0,12],apply_constraints_nonnegative_soft:12,appropri:[0,6,7,8,12],approx_ml:[3,7],approxim:[0,3,7,12],aquisitionfunct:0,arbitrari:0,arbitrary_q_method:12,area:7,arg:12,argument:[1,3,6,12],around:0,arrai:[0,7],arxiv:[0,6],assertitionerror:12,associ:[0,4,6,7],asssum:6,assum:[0,4,6,7,12],atol:6,atol_mean:6,atol_std:6,attribut:[6,7,12],augment:[0,6,11],augmentedbranin:11,augmentedhartmann:11,augmentedrosenbrock:11,auto:0,automat:12,averag:[0,12],awar:2,b_min:11,back:12,backpropag:0,bad:2,badinitialcandidateswarn:2,baed:6,bakshi:0,balandat2019botorch:0,balandat:0,base:[1,2,6,7,8,10,11,12],base_sampl:[8,12],basic:[0,7,12],batch:[0,1,4,6,7,8,9,12],batch_acq_valu:4,batch_candid:4,batch_cross_valid:1,batch_gp:6,batch_initial_condit:7,batch_model:6,batch_shap:[0,1,6,8,12],batch_shape_i:12,batch_shape_x:12,batch_valu:4,batch_x:6,batched_to_model_list:6,batchedmultioutputgpytorchmodel:[3,6],bayesian:[0,6],beal:11,becom:12,been:[0,6],befor:[0,12],behavior:0,being:0,benchmark:11,besid:0,best:[0,4,6,7],best_candid:4,best_f:[0,4,7],beta:[0,6,7],better:[0,4],between:[0,6,12],bfg:[4,7],bia:[6,12],bias:6,block:6,bool:[0,4,6,7,9,11,12],both:[0,6,7,8,9,12],botorcherror:2,botorchtensordimensionerror:2,botorchtensordimensionwarn:2,botorchtestcas:12,botorchwarn:[2,10],bound:[0,4,6,7,12],boundari:6,bounds_out:7,box:[0,4,9,12],branin:11,broadcast:[0,6,7,12],broader:0,buffer:12,bukin:11,c_1:[0,6],c_2:6,c_3:6,c_i:11,c_n:0,cach:6,calcul:[6,7],call:[0,6,7,8,9,12],callabl:[0,3,4,6,7,8,12],can:[0,3,6,7,12],candid:[0,2,4,6,7],candidate_set:0,candidategenerationerror:2,canid:7,care:6,cat:6,caus:0,cei:0,ceil:0,certain:0,chain:6,chainedinputtransform:6,chainedoutcometransform:6,check:[6,10,12],check_min_max_sc:6,check_no_nan:6,check_standard:6,chosen:[0,7],clamp:[0,4,7],classic:0,close:[0,7],closur:7,coeff:7,coeffici:[4,7],collaps:9,collapse_batch_dim:[0,9,12],collect:0,column:[0,4,6,7,12],columnwise_clamp:7,combin:0,come:6,commonli:11,compat:[4,6,12],complex:0,compli:2,compris:0,comput:[0,3,6,7,12],concaten:[0,12],concatenate_pending_point:12,condit:[3,6,7],condition_on_observ:6,confid:0,conjunct:[7,8],consid:[0,6,7,12],constant:[6,11],constarint:0,constrain:[0,4,7,12],constrained_ei:0,constrained_object:0,constrainedexpectedimprov:0,constrainedmcobject:0,constraint:[0,4,6],constraint_i:0,construct:[0,6,8,12],construct_base_sampl:12,construct_base_samples_from_posterior:12,constructor:[0,6,7,11],contain:[0,4,6,7,10,12],context:[0,2,12],context_manag:10,contextmanag:12,contextu:0,control:[0,3,4],conveni:[0,6],convent:2,converg:7,convergencecriterion:7,convert:[4,6,7],convert_to_target_pre_hook:12,copi:[0,12],correct:6,correl:6,correspond:[0,6,7,12],cos:[6,11],cosin:11,cosine8:11,cost:2,cost_awar:0,cost_aware_util:0,cost_model:0,cost_object:0,cost_sampl:0,costawareutil:0,costawarewarn:2,cov:[6,9],cov_:6,cov_ln:6,cov_ln_:6,cov_n:6,cov_n_:6,covar:6,covar_modul:6,covar_module_bias:6,covar_module_unbias:6,covari:[0,6,8,9],cover:0,cpu:12,creat:[1,7,12],criterion:7,cross:1,cross_valid:5,cube:[6,10],current:[0,1,2,6,7],current_valu:0,custom:[0,6,7],cv_fold:1,cv_result:1,cvfold:1,cvresult:1,cycl:7,cyclic:[0,7],cyclic_opt:7,d_f:0,data:[0,2,6,7,9,10,12],data_fidel:6,daulton:0,dayanik:0,debug:10,debugg:10,decai:6,decompos:6,decor:12,deep:0,def:12,defin:[6,12],degener:8,deisenroth:0,delta:[0,6],deriv:0,descend:12,descent:7,describ:6,design:[0,6,7],desir:[0,9],detail:0,determin:[0,12],determinist:[0,7,8,9],deterministicmodel:6,deterministicposterior:[6,8],determist:[6,7],deviat:[0,6,11],devic:[7,8,12],diagnost:7,dict:[0,1,4,6,7,12],dictionari:[0,4,6,7,12],differ:[0,6],differnti:0,dim:[0,6,7,8,11,12],dimens:[0,6,7,8,9,11,12],dimension:[0,6,7,11,12],direct:[7,12],directli:[0,6,9],disabl:7,discret:0,discuss:0,disp:7,displai:7,distribut:[0,6,8,9,12],dixonpric:11,document:0,doe:[0,2,6,7,12],domain:11,don:7,done:0,down:6,downsampl:6,downsamplingkernel:6,downstream:7,draw:[0,8,9,12],draw_sobol_normal_sampl:12,draw_sobol_sampl:12,drawn:[6,9,12],dropwav:11,dtype:[7,8,9,12],dummi:12,dure:[0,2,6,7],each:[0,4,6,7,8,9,12],easiest:6,effici:0,egghold:11,either:[0,6,7],element:[0,4,6,7,12],elimin:12,elment:7,emit:6,empir:0,empti:7,enabl:7,encod:[4,7],enforc:[7,12],engin:9,ensur:[0,12],entri:7,equal:[4,6,7,12],equality_constraint:[4,7],error:6,estim:0,eta:[0,7,12],eval:[6,7],eval_lin_constraint:7,evalu:[0,1,6,7,9,11,12],evaluate_tru:11,evalut:7,even:6,event:[8,12],event_shap:[8,12],everi:6,exact:6,exact_gp:6,exactgp:6,exactli:[0,12],exactmarginalloglikelihood:[1,3,7],exampl:[0,1,3,4,6,7,8,9,12],exampleacquisitionfunct:12,exampleclass:12,exce:0,except:[5,6,7],exclud:7,execut:12,exercis:12,exp:[6,7,11,12],expand:[0,8,12],expand_trace_observ:0,expans:0,expect:[0,6,7,12],expected_q:12,expectedimprov:0,expens:0,explicit:[6,7],exponenti:6,exponential_decai:6,exponentialdecaykernel:6,express:6,extend:0,extra:6,extract:[0,4,7],extract_candid:0,f_1:6,f_2:6,f_i1:0,f_i:0,f_ij:0,f_ik:0,fact:7,factori:12,failur:3,fake:6,fals:[0,1,6,7,9,11,12],fanci:7,fantas:[0,6,7],fantasi:[0,6,7,10],far:0,fashion:[0,6,7,12],feasibilti:0,feasibl:[0,12],featur:[1,2,4,6,7,12],feature_index:7,feed:12,fewer:6,fidel:0,fidelity_dim:[0,6],fidelity_weight:6,field:[1,7,12],filter:10,financ:9,finit:7,first:[0,6,7],fit:[0,5],fit_arg:1,fit_gpytorch_model:[1,3],fit_gpytorch_scipi:[3,7],fit_gpytorch_torch:7,fix:[4,6,7],fix_featur:7,fixed_cost:6,fixed_featur:[0,4,7],fixedfeatureacquisitionfunct:0,fixednoisegp:[0,6],fixednoisemultitaskgp:6,fixtur:12,flag:10,flat_idxr:7,flexibl:6,float32:9,fold:1,follow:[1,6,7,9,12],fopt:7,form:[0,4,6,7],format:6,former:6,formula:0,forward:[0,6,9,11,12],four:6,frac_random:7,fraction:[0,7],frazier2008knowledg:0,frazier:[0,6],from:[0,3,4,6,7,8,9,12],ftol:7,full:[0,6],full_lik:6,fulli:7,funtion:7,fval:7,gamma:6,gaussian:[0,6],gaussianlikelihood:6,gen:5,gen_batch_initial_condit:[4,7],gen_candidates_scipi:4,gen_candidates_torch:4,gen_loo_cv_fold:1,gen_one_shot_kg_initial_condit:7,gener:[1,2,4,6,8,9,12],generic_object:0,genericcostawareutil:0,genericdeterministicmodel:6,genericmcobject:0,get:[0,6,7],get_acquisition_funct:0,get_augmented_q_batch_s:0,get_batch_dimens:6,get_best_candid:4,get_infeasible_cost:0,get_objective_weights_transform:12,get_outcome_constraint_transform:12,given:[0,12],global:11,gp1:6,gp2:6,gp_model:6,gp_regress:6,gp_regression_fidel:6,gpt_posterior_set:12,gpytorch:[1,3,7],gpytorchmodel:[0,1,6,7],gpytorchposterior:[0,1,6,8],gradient:[7,8,10],greedi:0,griewank:11,grow:12,gumbel:0,h_min:11,hand:[7,12],handl:[0,7,12],happen:6,hartmann:11,has:[0,1,6,7,8,11,12],have:[0,4,6,7,12],heavisid:12,helper:[6,12],here:[0,6,7,11,12],heteroskeast:6,heteroskedast:6,heteroskedasticsingletaskgp:6,heurist:7,higher:[0,4],highest:4,highli:0,holder:11,holdert:11,honor:6,hook:[6,12],html:11,http:11,hutter:0,hypercub:11,hyperparamet:[3,6,7],i_d:[9,12],i_qm:12,i_qo:12,icm:6,icml:0,idc:6,idea:0,ident:12,identity_object:0,identitymcobject:0,ignor:[0,6,7,8,9],iid:[0,9,12],iidnormalsampl:9,iii:[6,10],implement:[0,6,9,12],impli:[0,12],implicitli:8,importantli:12,impos:7,improv:0,improvemnt:0,incl:0,includ:[0,3,4,6,7,12],increas:0,independ:[0,6],independentmodellist:6,index:[0,5,6,7,12],indic:[0,4,6,7,10,12],individu:[0,6],ineffici:1,ineq:7,inequ:[4,7],inequality_constraint:[4,7],inf:0,infeas:[0,12],infeasible_cost:[0,12],infer:[0,6],infinit:11,inform:[0,7],inherit:6,initi:[0,1,2,3,4,6,9,12],initial_condit:4,initialize_q_batch:7,initialize_q_batch_nonneg:7,initit:7,inner:0,inner_sampl:0,input:[0,2,7,8,10,12],input_batch_shap:6,inputdataerror:[2,6],inputdatawarn:2,inputtransform:6,insert:6,insid:6,instanc:[0,1,6,7,12],instanti:[0,6],instead:[0,6,7,9,12],interact:6,interfac:6,intern:[0,1,6,7,9,12],interpret:0,interv:6,introduc:[0,12],introduct:9,intut:7,inv_transform:9,invers:[0,9],inversecostweightedutil:0,involv:0,is_nonneg:0,issu:[0,2,7],iter:[4,6,7],iteration_fidel:6,its:[0,6,11,12],jacobian:7,jegelka:0,jiang:0,joint:[0,6,7,12],jointli:[0,6,7,12],journal:0,just:[0,4,6,7,8],k_0:6,k_1:6,k_2:6,k_3:6,k_i:6,karrer:0,keepdim:6,kei:[4,6,7,12],knowledge_gradi:0,known:[0,6],kwarg:[0,3,6],lambda:0,larg:7,larger:12,last:[0,6,7,11,12],latter:6,lazyvari:6,leaf_modul:6,learn:6,least:[7,12],left:12,len:6,length:[0,7],lengthscal:6,lengthscale_constraint:6,lengthscale_constraint_bias:6,lengthscale_constraint_unbias:6,lengthscale_prior:6,lengthscale_prior_bias:6,lengthscale_prior_unbias:6,lenthscal:6,less:7,let:0,letham:0,level:[0,6,8],levi:11,lhs:12,like:0,likelihood:[1,3,6,7],lin_constraint_jac:7,linear:[0,6,7,12],linear_object:0,linear_trunc:6,linear_truncated_fidel:6,linearmcobject:0,lineartruncatedfidelitykernel:6,list:[0,4,7,12],list_gp:6,load_state_dict:12,local:11,locat:6,log:[0,6],lognorm_to_norm:6,loo:1,lower:[0,6,7,12],lower_bound:[4,7],lower_i:0,mai:[0,7,12],make:[6,12],make_scipy_bound:7,make_scipy_linear_constraint:7,manag:12,mani:11,manual:[0,12],manual_se:12,map:[0,6,7,12],margin:[0,6],marginalloglikelihood:[1,3,7],match:[6,12],match_batch_shap:12,matern:6,maternkernel:6,math:11,mathbf:6,matrix:[0,6,8,9],max:[0,7,12],max_frac:0,max_retri:3,max_value_entropy_search:0,maxim:[0,3,7,11],maximum:[0,3,4,7,11],maxit:[4,7],mc_acq:0,mc_obj:0,mc_sampl:[0,12],mcacquisitionfunct:0,mcacquisitionobject:0,mcsampler:[0,6,9],mean:[0,1,6,7,8,9,10,12],mean_cost:0,mean_transform:8,meant:[6,7],measur:[1,6],memori:[0,1],mes:0,method:[0,4,6,7,9,12],methodnam:12,mf_me:0,michalewicz:11,min:[0,12],min_cost:0,min_stddv:6,min_stdv:6,min_x:0,minim:[4,7,11],minima:11,minimum:[0,4,6,11],mininimum:11,miss:[6,12],missing_kei:12,mixtur:11,mll:[3,7],mll_cl:1,mock:12,mockacquisitionfunct:12,mockmodel:12,mockposterior:12,mod_batch_shap:6,mode:[0,1,4,6,7,12],model1:6,model2:6,model:[0,1,3,4,5,8,9,10,12],model_cl:1,model_list:6,model_list_gp_regress:6,model_list_to_batch:6,modellist:6,modellistgp:[3,6],modellistgpytorchmodel:6,modifi:6,modul:[0,4,5,6,7,8,9,11,12],module_from_array_func:7,module_to_arrai:7,module_to_array_func:7,moduledict:6,moham:0,monte_carlo:0,more:[0,7],moriconi:0,most:11,mu_:6,mu_ln:6,mu_ln_:6,mu_n:6,mu_n_:6,muller:9,multi:[0,1,7,8,12],multi_fidel:11,multioutput_to_batch_mode_transform:6,multipl:[0,6],multistart:7,multitaskgp:6,multitaskgpytorchmodel:6,multitaskmultivariatenorm:8,multivari:[6,9],multivariatenorm:[6,8],multivariatenormalqmcengin:9,must:[0,1,6,7,9,12],mutput_shap:12,mutual:0,mve:0,mvn:[6,8],n_i:6,n_nz:0,n_param:7,n_sampl:12,name:[0,6,7,12],named_parameters_and_constraint:7,namedtupl:12,nan:[6,10],nativ:7,ndarrai:7,need:[0,6],neg:[0,7,12],negat:11,nei:0,new_batch_shap:6,new_i:6,new_posterior:8,new_x:6,nip:0,no_grad:8,nois:[1,6,11,12],noise_std:11,noiseless:0,noisi:0,noisyexpectedimprov:0,non:[0,6,7,12],none:[0,1,4,6,7,8,9,10,11,12],nonneg:[7,12],norm:6,norm_to_lognorm:6,norm_to_lognorm_mean:6,norm_to_lognorm_vari:6,normal:[0,6,8,9,10,12],normalize_indic:12,normalqmcengin:9,note:[0,1,6,7],num_dimens:6,num_fantasi:[0,7],num_inner_restart:7,num_mv_sampl:0,num_output:[6,12],num_restart:[4,7],num_sampl:[0,9,12],num_trace_ob:0,num_y_sampl:0,number:[0,1,3,4,6,7,9,12],numer:[0,7,9],numpi:4,numpy_convert:7,obj:[0,12],object:[6,7,8,9],objective_index:0,observ:[0,1,6,7,10,11,12],observation_nois:[1,6,12],observatioon:6,observed_i:1,observed_yvar:1,obtain:[0,6,7,8,12],off:0,offset:[0,6,8],offset_constraint:6,offset_prior:6,often:[0,7],omit:[0,6,9,12],one:[0,6,7,11],ones:[6,12],oneshotacquisitionfunct:0,onli:[0,1,6,7,8,12],onto:0,oper:[0,6],optim:[0,2,3,4,5,8,9,11,12],optimal_valu:11,optimizationiter:7,optimizationwarn:2,optimize_acqf:7,optimize_acqf_cycl:7,optimizer_cl:7,optimz:0,optimzi:[0,2,7],option:[0,1,4,6,7,8,9,11,12],order:[0,6,7],origin:[6,8],original_batch_shap:6,other:10,otherwis:[0,6,7,9],out:[0,6,7,9],outcom:[0,7,8,12],outcome_constraint:12,outcome_transform:6,outcometransform:6,outer:[0,7],output:[0,4,6,7,8,9,12],output_indic:[6,12],output_shap:12,output_task:6,over:[0,6,7,8,12],overridden:6,owen:12,own:6,p_1j:11,p_ij:11,packag:7,page:[5,9],pages2018numprob:9,palmerin:6,parallel:0,paramet:[0,1,3,4,6,8,9,10,11,12],parameter:0,parameter_arrai:7,parameter_constraint:7,parameterbound:7,parmet:6,part:[0,6],particular:[7,10],pass:[0,1,3,6,7],pend:[0,12],per:6,perform:[0,1,4,6,10],persist:12,perturb:7,place:[0,6,7],pleas:6,plu:[0,7],point:[0,4,6,7,10,11,12],polici:0,polynomi:6,posit:[6,7,12],possibl:[0,2,6,7],post:[0,7],post_processing_func:7,posterior:[0,1,5,6,7,9,12],posteriormean:0,potenti:0,pow:6,powel:[0,11],power:6,power_constraint:6,power_prior:6,practic:6,pre:12,preced:7,predict:[0,6],prefer:0,present:[4,6],prevent:9,previous:[0,6],primari:12,print:10,prior:[3,6,7,12],probabilityofimprov:0,probabl:[0,7,9],problem:[0,1,4,7],process:[6,7],prod_i:0,produc:[0,9],product_i:0,programm:0,project:[0,7],project_to_target_fidel:0,propag:10,propagate_grad:10,propat:10,properti:[0,1,6,7,8,9,11,12],property_dict:7,proport:7,provid:[0,4,6,7,9,12],prune:0,prune_baselin:0,prune_inferior_point:0,publish:9,put:9,pytorch:[0,4],q_aug:0,q_e:0,qei:[0,4,7],qei_ff:0,qexpectedimprov:[0,4,7],qkg:7,qknowledgegradi:[0,7],qmaxvalueentropi:0,qmc:[0,7,12],qmultifidelityknowledgegradi:0,qmultifidelitymaxvalueentropi:0,qnei:0,qnoisyexpectedimprov:0,qpi:0,qprobabilityofimprov:0,qsimpleregret:0,qsr:0,quasi:[0,9,12],qucb:[0,7],qupperconfidencebound:[0,7],rais:[2,6,7,12],raise_on_fail:6,raise_on_viol:7,rand:[0,1,6,7,8,12],rand_lik:[1,6],randn:6,random:[7,9,12],rang:7,rank:6,rastrigin:11,rather:6,raw:[6,7],raw_inner_sampl:7,raw_sampl:[4,7],reason:10,recip:6,recommend:[0,7],recurs:6,reduc:0,refer:[0,9,11],regist:[6,7],regret:0,rel:[6,7],relat:2,releat:2,relev:[7,12],reli:0,remain:7,remov:0,reparameter:0,repeat:12,replac:[0,7],repres:[0,6,8,12],represent:7,request:[0,8],requir:[0,6,7,12],requires_grad:7,resampl:9,resp:0,respect:[0,4,6,7,12],restart:7,result:[0,7,9],retain:0,retri:3,return_best_onli:7,revers:6,rezend:0,rezende2014reparam:0,rhs:[4,7],right:7,rng:[9,12],rosenbrock:11,round:7,rsampl:[8,12],run:[6,12],runtest:12,same:[0,6,7,8,12],sampl:[0,2,3,5,6,7,8],sample_all_prior:7,sample_shap:[0,8,9,12],sample_transform:8,sampler:[0,6,8],samplingwarn:2,satisfi:[0,7],scalabl:0,scalar:[0,7,8,12],scalarize_posterior:8,scalarizedobject:0,scale:6,scipi:[4,7],scipy_bound:7,scipy_object:7,scrambl:12,scriptmodul:[0,6,9,12],search:[0,4,5],second:[6,7],see:[0,6,7],seed:[0,9,12],select:[0,4,6,7],self:[0,12],semant:6,separ:6,sequenc:[6,9],sequenti:[0,3,6,7],set:[0,2,4,5,6,7,8,9,11,12],set_params_with_arrai:7,set_x_pend:[0,12],setup:12,sfu:11,shape:[0,1,6,7,8,9,12],shapex:7,share:[0,6,9,12],shekel:11,shift:12,shot:7,should:[0,6,7,9,10],siam:0,side:[7,12],sigma:[0,8,9],sigmoid:[0,12],significantli:0,silent:6,similar:[6,7],simpl:[0,6,8],simpli:[6,12],simplifi:7,sin:[1,6,11],sinc:[6,7],singl:[0,4,6,7,8,9,11,12],single_q_method:12,singletaskgp:[0,1,3,6,7],singletaskmultifidelitygp:6,six:11,sixhumpcamel:11,size:[0,1,4,6,7,8,9,12],slsqp:4,small:1,smaller:0,smart:7,smooth:6,sobol:9,sobolengin:9,sobolqmcnormalsampl:[0,9],soft:12,soft_eval_constraint:12,softmax:[7,12],solut:[0,7],solv:7,solver:7,some:[0,12],somewhat:0,sourc:[0,1,2,3,4,6,7,8,9,10,11,12],space:[0,6,7,12],specif:[0,7],specifi:[0,6,7,8,11,12],speed:[6,12],split:0,springer:9,sqrt:[0,11],squeez:12,squeeze_last_dim:[0,12],ssurjano:11,stack:[6,12],standard:[0,6,7,9,10,11,12],start:[4,7],state:[0,6,9,10,12],state_dict:12,statist:6,std:[6,7],step:[0,7,12],stochast:[0,7,9],str:[0,1,4,6,7,12],strategi:[2,7,12],strict:[6,12],strictli:12,string:7,strong:6,structur:6,styblinski:11,styblinskitang:11,style:6,sub:6,sub_modul:6,subclass:[6,9,10],subject:0,submit:0,submodel:6,subset:[0,6,12],subset_output:6,suffici:6,sum:[0,6],sum_:[0,6,11],sum_i:[4,7],sum_j:6,support:[0,1,6,7,8,12],suppress:[10,12],suppress_botorch_warn:10,synthetictestfunct:[11,12],synthetictestfunctionbasetestcas:12,synthtet:11,t_batch_mode_transform:12,tabl:11,take:[0,6,7,12],taken:6,takeno2019mfmv:0,takeno:0,tang:11,target:[0,6,10],target_batch_shap:6,target_fidel:0,task:[1,6,7,12],task_featur:6,tau:0,temperatur:[0,7,12],tensor:[0,1,2,4,6,7,8,9,11,12],term:[0,6],termin:7,test:[0,1,6],test_forward:12,test_funct:5,test_i:1,test_optim:12,test_optimal_valu:12,test_x:[0,1,9],test_yvar:1,testcas:12,than:[6,7,10],thee:0,thei:[0,7,12],them:6,thi:[0,1,4,6,7,8,9,10,12],those:[6,12],though:[0,6],threehumpcamel:11,threshold:7,through:[0,10,12],thu:9,time:[0,6,7],todo:[0,7],toler:[6,7,10],too:0,torch:[0,1,4,6,8,9,11,12],torchattr:7,toscano:6,total:7,trace:0,track:7,track_iter:7,trade:0,tradeoff:0,trail:6,train:[1,6,7,10],train_i:[0,1,3,6,7,10],train_input:7,train_target:7,train_x1:6,train_x2:6,train_x:[0,1,3,6,7,10],train_y1:6,train_y2:6,train_y_var:10,train_yvar:[0,1,6],transfomr:6,transform:[0,7,9],transformedposterior:8,trick:0,trip:7,trivial:0,truncat:6,tune:6,tupl:[0,1,4,6,7,8,12],two:[0,6,7,8,11],type:[0,1,3,4,6,7,8,9,10,11,12],typic:[6,7,8,11,12],u_1:0,u_n:0,ucb:0,under:[0,7],underli:9,unexpect:12,unexpected_kei:12,union:[0,4,6,7],uniqu:11,unit:[6,10,12],unittest:12,universitext:9,unknown:0,unlik:[0,7],unnorm:12,unsupport:2,unsupportederror:2,untransform:6,untransform_posterior:6,unus:[0,6],updat:[6,7],upon:0,upper:[0,7,12],upper_bound:[4,7],upper_i:0,upperconfidencebound:0,usag:6,use:[0,1,3,4,6,7,9,12],use_gumbel:0,use_mean:0,used:[0,4,6,7,8,9,11,12],useful:[0,7,9,10],uses:[0,4,6,7,9,12],using:[0,1,4,6,7,8,9,12],usingth:12,usual:[0,9,11],util:[1,3,4,5],utiltii:[0,6],valid:[1,6,7,8,10],validate_input_sc:[6,10],valu:[0,4,6,7,8,10,12],valueerror:12,variabl:[0,6],varianc:[0,6,8,9,10,12],variance_transform:8,variat:[8,12],vector:[6,9],vectorof:6,verbos:[4,10],veri:[1,6],version:[0,11],via:[0,4,6,7,9,12],violat:2,w_1:11,w_d:11,w_i:11,wai:6,wall:[0,7],wall_tim:7,wang2018mv:0,wang:0,want:7,warn:[1,6,10,12],weight:[0,6,7,8,12],weigth:0,well:[0,7],what:[0,7],when:[0,2,6,7,10,12],where:[0,1,4,6,7,11,12],whether:[0,3,7,10,12],which:[0,6,7,9,11,12],whole:12,whose:[0,12],wierstra:0,wilson2017reparam:0,wilson:[0,6],wise:[7,12],within:[6,12],without:[0,7,8],work:[6,7,12],would:0,wrap:[0,6],wrapper:[0,6,8],wu2016parallelkg:0,wu2019mf:6,www:11,x_1:[0,6,11],x_2:[6,11],x_3:11,x_7:11,x_actual:0,x_baselin:0,x_d:11,x_expand:0,x_fantasi:0,x_full:0,x_i:11,x_j:11,x_match:12,x_normal:12,x_observ:0,x_pend:[0,12],x_proj:0,x_q:0,xinit:[4,7],xrnd:7,y_baselin:0,y_i:0,y_squeez:12,y_standard:12,y_tild:0,yet:0,yield:0,you:[6,7],your:6,yvar:6,z_1:11,z_2:11,z_3:11,z_4:11,z_i:11,zero:[0,6,7,8,10,12]},titles:["botorch.acquisition","botorch.cross_validation","botorch.exceptions","botorch.fit","botorch.gen","BoTorch API Reference","botorch.models","botorch.optim","botorch.posteriors","botorch.sampling","botorch.settings","botorch.test_functions","botorch.utils"],titleterms:{"abstract":[0,6,8],"function":[0,7,9,11],One:0,The:0,acquisit:[0,7],analyt:0,api:[0,5,6,8,9],awar:[0,6],base:[0,9],botorch:[0,1,2,3,4,5,6,7,8,9,10,11,12],carlo:[0,9],compon:6,constraint:[7,12],convers:[6,7],cost:[0,6],cross_valid:1,determinist:6,determinst:8,entropi:0,error:2,except:2,featur:0,fidel:[6,11],fit:[3,7],fix:0,gen:4,gener:[0,7],gpytorch:[6,8],gradient:0,helper:7,indic:5,initi:7,input:6,kernel:6,knowledg:0,list:6,model:[6,7],mont:[0,9],multi:[6,11],multitask:6,numpi:7,object:[0,12],optim:[6,7],other:6,outcom:6,paramet:7,posterior:8,qmc:9,refer:5,regress:6,sampl:[9,12],sampler:9,set:10,shot:0,synthet:11,tabl:5,test:[11,12],test_funct:11,tool:7,torch:7,transform:[6,8,12],util:[0,6,7,12],utilti:6,warn:2}})