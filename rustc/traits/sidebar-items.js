initSidebarItems({"enum":[["FulfillmentErrorCode",""],["IntercrateAmbiguityCause",""],["MethodViolationCode","Reasons a method might not be object-safe."],["ObjectSafetyViolation",""],["ObligationCauseCode",""],["OrphanCheckErr",""],["Reveal","Depending on the stage of compilation, we want projection to be more or less conservative."],["SelectionError",""],["Vtable","Given the successful resolution of an obligation, the `Vtable` indicates where the vtable comes from. Note that while we call this a \"vtable\", it does not necessarily indicate dynamic dispatch at runtime. `Vtable` instances just tell the compiler where to find methods, but in generic code those methods are typically statically dispatched -- only when an object is constructed is a `Vtable` instance reified into an actual vtable."]],"fn":[["elaborate_predicates",""],["find_associated_item","Given a selected impl described by `impl_data`, returns the definition and substitutions for the method with the name `name` the kind `kind`, and trait method substitutions `substs`, in that impl, a less specialized impl, or the trait default, whichever applies."],["fully_normalize",""],["normalize","Normalizes any associated type projections in `value`, replacing them with a fully resolved type where possible. The return value combines the normalized result and any additional obligations that were incurred as result."],["normalize_and_test_predicates","Normalizes the predicates and checks whether they hold in an empty environment. If this returns false, then either normalize encountered an error or one of the predicates did not hold. Used when creating vtables to check for unsatisfiable methods."],["normalize_param_env_or_error","Normalizes the parameter environment, reporting errors if they occur."],["normalize_projection_type","The guts of `normalize`: normalize a specific projection like `<T as Trait>::Item`. The result is always a type (and possibly additional obligations). If ambiguity arises, which implies that there are unresolved type variables in the projection, we will substitute a fresh type variable `$X` and generate a new obligation `<T as Trait>::Item == $X` for later."],["orphan_check","Checks the coherence orphan rules. `impl_def_id` should be the def-id of a trait impl. To pass, either the trait must be local, or else two conditions must be satisfied:"],["overlapping_impls","If there are types that satisfy both impls, returns a suitably-freshened `ImplHeader` with those types substituted"],["predicates_for_generics","Creates predicate obligations from the generic bounds."],["provide",""],["provide_extern",""],["supertrait_def_ids",""],["supertraits",""],["transitive_bounds",""],["translate_substs","Given a subst for the requested impl, translate it to a subst appropriate for the actual item definition (whether it be in that impl, a parent impl, or the trait)."],["type_known_to_meet_bound","Determines whether the type `ty` is known to meet `bound` and returns true if so. Returns false if `ty` either does not meet `bound` or is not known to meet bound (note that this is conservative towards no impl, which is the opposite of the `evaluate` methods)."]],"mod":[["specialization_graph",""],["trans",""]],"struct":[["DerivedObligationCause",""],["EvaluationCache",""],["FulfillmentContext","The fulfillment context is used to drive trait resolution.  It consists of a list of obligations that must be (eventually) satisfied. The job is to track which are satisfied, which yielded errors, and which are still pending. At any point, users can call `select_where_possible`, and the fulfillment context will try to do selection, retaining only those obligations that remain ambiguous. This may be helpful in pushing type inference along. Once all type inference constraints have been generated, the method `select_all_or_error` can be used to report any remaining ambiguous cases as errors."],["FulfillmentError",""],["MismatchedProjectionTypes",""],["Normalized",""],["Obligation","An `Obligation` represents some trait reference (e.g. `int:Eq`) for which the vtable must be found.  The process of finding a vtable is called \"resolving\" the `Obligation`. This process consists of either identifying an `impl` (e.g., `impl Eq for int`) that provides the required vtable, or else finding a bound that is in scope. The eventual result is usually a `Selection` (defined below)."],["ObligationCause","Why did we incur this obligation? Used for error reporting."],["OnUnimplementedDirective",""],["OnUnimplementedNote",""],["OverlapError","Information pertinent to an overlapping impl error."],["OverlapResult",""],["ProjectionCache","The projection cache. Unlike the standard caches, this can include infcx-dependent type variables - therefore, we have to roll the cache back each time we roll a snapshot back, to avoid assumptions on yet-unresolved inference variables. Types with skolemized regions also have to be removed when the respective snapshot ends."],["ProjectionCacheSnapshot",""],["RegionObligation",""],["SelectionCache",""],["SelectionContext",""],["SpecializesCache",""],["SupertraitDefIds",""],["VtableAutoImplData",""],["VtableBuiltinData",""],["VtableClosureData",""],["VtableFnPointerData",""],["VtableGeneratorData",""],["VtableImplData","Identifies a particular impl in the source, along with a set of substitutions from the impl's type/lifetime parameters. The `nested` vector corresponds to the nested obligations attached to the impl's type parameters."],["VtableObjectData","A vtable for some object-safe trait `Foo` automatically derived for the object type `Foo`."]],"type":[["Obligations",""],["PredicateObligation",""],["PredicateObligations",""],["Selection",""],["SelectionResult","When performing resolution, it is typically the case that there can be one of three outcomes:"],["Supertraits",""],["TraitObligation",""],["TraitObligations",""]]});